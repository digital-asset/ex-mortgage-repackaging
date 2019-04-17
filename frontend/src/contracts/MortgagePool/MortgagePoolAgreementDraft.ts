import { Contract, createContract, DaGrpc, IContractProto, ILeafType, IType } from '@da/da-grpc'
import { Moment } from 'moment';
import { IUserStore } from 'src/containers/UserStore';
import { indexFields, ISerchable } from '../../helpers';
import { CUSIP, ICUSIP, IMortgagePoolAgreementDraftFields, MortgagePoolAgreementDraftFields } from '../CustomTypes';
import { IWithUnderlyingCusips } from './helpers';
import { MortgagePool } from './MortgagePool';
import { MortgagePoolAgreementProposal } from './MortgagePoolAgreementProposal';

interface IProps {
  mortgagePoolHolder: string,
  operator: string,
  agreementDraftFields: IMortgagePoolAgreementDraftFields,
  underlyingPools: IUnderlyingPool[]
}

export interface IDraftUpdateResult {
  mortgagePoolAgreementDraft: MortgagePoolAgreementDraft,
  mortgagePool: MortgagePool
}

export interface IDraftProposalResult {
  mortgagePoolAgreementProposal: MortgagePoolAgreementProposal,
  underlyingPoolCids: MortgagePool[]
}

export interface ISetUnderlyingPools {
  draft: MortgagePoolAgreementDraft,
  lockedPools: MortgagePool[],
  unlockedPools: MortgagePool[]
}

export interface IUnderlyingPool {
  cusip: ICUSIP,
  lastLoanMaturity: Moment
}

export const UnderlyingPool: IType = {
  argument: [
    { label: 'cusip', type: CUSIP },
    {label: 'lastLoanMaturity', type: ILeafType.Time }
  ],
  datatypeId: 'Main.MortgagePoolAgreementDraft.UnderlyingPool'
}

export class MortgagePoolAgreementDraft extends Contract<IProps> implements ISerchable, IWithUnderlyingCusips {
  public searchIndex = (
    indexFields(this.argument.agreementDraftFields) +
    this.getUnderlyingCusips().join('')
  ).toUpperCase()

  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'mortgagePoolHolder', type: ILeafType.Party },
      { label: 'operator', type: ILeafType.Party },
      { label: 'agreementDraftFields', type: MortgagePoolAgreementDraftFields },
      { label: 'underlyingPools', type: { argument: UnderlyingPool } }
    ],
    choices: [
      {
        argument: [{ label: 'mortgagePool', type: ILeafType.ContractId }],
        name: 'AllocateCollateral',
        partyLabel: 'mortgagePoolHolder'
      },
      {
        argument: [{ label: 'mortgagePool', type: ILeafType.ContractId }],
        name: 'DeallocateCollateral',
        partyLabel: 'mortgagePoolHolder'
      },
      {
        argument: [
          { label: 'securitizer', type: ILeafType.Party },
          { label: 'underlyingPoolCids', type: { argument: ILeafType.ContractId } }
        ],
        name: 'SubmitProposal',
        partyLabel: 'mortgagePoolHolder'
      },
    ],
    module: 'Main.MortgagePoolAgreementDraft',
    name: 'MortgagePoolAgreementDraft',
    signatory: 'mortgagePoolHolder',
  }

  public async mortgagePoolHolderSetUnderlyingPools(
    expectedCids: string[],
    actualCids: string[]
  ): Promise<ISetUnderlyingPools> {
    const toDeallocate = actualCids
      .filter(cusip => !expectedCids.includes(cusip))
    const toAllocate = expectedCids
      .filter(cusip => !actualCids.includes(cusip))
    const lockedPools = []
    const unlockedPools = []
    let draft: MortgagePoolAgreementDraft = this
    for (const cid of toDeallocate){
      const result = await draft.mortgagePoolHolderDeallocateCollateral(cid)
      unlockedPools.push(result.mortgagePool)
      draft = result.mortgagePoolAgreementDraft
    }
    for (const cid of toAllocate){
      const result = await draft.mortgagePoolHolderAllocateCollateral(cid)
      lockedPools.push(result.mortgagePool)
      draft = result.mortgagePoolAgreementDraft
    }
    return { draft, lockedPools, unlockedPools }
  }

  public async mortgagePoolHolderSetUnderlyingCusips(
    expectedCusips: string[], context: IUserStore
  ): Promise<MortgagePoolAgreementDraft> {
    const cids = (cusips: string[]) => context.logic.contracts.poolsByCusips(cusips)!.map(pool => pool.cid)
    const actualCids = cids(this.getUnderlyingCusips())
    const expectedCids = cids(expectedCusips)
    const { draft } = await this.mortgagePoolHolderSetUnderlyingPools(expectedCids, actualCids)
    return draft
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<MortgagePoolAgreementDraft> {
    return await createContract(daGrpc, props, this)
  }

  public async mortgagePoolHolderAllocateCollateral(mortgagePool: string): Promise<IDraftUpdateResult> {
    const events = await this.exercise('AllocateCollateral', { mortgagePool })
    return {
      mortgagePool: events.getFirst(MortgagePool),
      mortgagePoolAgreementDraft: events.getFirst(MortgagePoolAgreementDraft),
    }
  }

  public async mortgagePoolHolderDeallocateCollateral(mortgagePool: string): Promise<IDraftUpdateResult> {
    const events = await this.exercise('DeallocateCollateral', { mortgagePool })
    return {
      mortgagePool: events.getFirst(MortgagePool),
      mortgagePoolAgreementDraft: events.getFirst(MortgagePoolAgreementDraft),
    }
  }

  public async mortgagePoolHolderSubmitProposal(securitizer: string, underlyingPoolCids: string[]): Promise<IDraftProposalResult> {
    const events = await this.exercise('SubmitProposal', { securitizer, underlyingPoolCids })
    return {
      mortgagePoolAgreementProposal: events.getFirst(MortgagePoolAgreementProposal),
      underlyingPoolCids: events.getAllAsContracts(MortgagePool, underlyingPoolCids.length)
    }
  }

  public getUnderlyingCusips() {
    return this.argument.underlyingPools.map(
      underlyingPool => underlyingPool.cusip.text
    )
  }

  public getMaturity(): Moment | undefined {
    const maybeMaturity = this.argument.agreementDraftFields.lastLoanMaturity
    return maybeMaturity
  }
}
