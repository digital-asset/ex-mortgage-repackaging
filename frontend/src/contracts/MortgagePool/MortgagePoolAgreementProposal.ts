import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'
import { indexFields, ISerchable } from '../../helpers';
import { CUSIP, ICUSIP, IMortgagePoolAgreementFields, MortgagePoolAgreementFields } from '../CustomTypes';
import { IWithUnderlyingCusips } from './helpers';
import { MortgagePool } from './MortgagePool';
import { MortgagePoolAgreement } from './MortgagePoolAgreement';

export interface IProps {
  mortgagePoolHolder: string
  securitizer: string
  operator: string
  agreementFields: IMortgagePoolAgreementFields
  underlyingCusips: ICUSIP[]
}

export class MortgagePoolAgreementProposal extends Contract<IProps> implements ISerchable, IWithUnderlyingCusips {
  public searchIndex = (
    indexFields(this.argument.agreementFields) +
    this.getUnderlyingCusips().join('')
  ).toUpperCase()

  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'mortgagePoolHolder', type: ILeafType.Party },
      { label: 'securitizer', type: ILeafType.Party },
      { label: 'operator', type: ILeafType.Party },
      { label: 'agreementFields', type: MortgagePoolAgreementFields },
      { label: 'underlyingCusips', type: { argument: CUSIP } }
    ],
    choices: [
      {
        argument: [
          { label: 'availableCusipCid', type: ILeafType.ContractId },
          { label: 'registry', type: ILeafType.Party },
        ],
        name: 'Accept',
        partyLabel: 'securitizer'
      },
      {
        argument: [
          { label: 'underlyingPoolCids', type: { argument: ILeafType.ContractId } },
        ],
        name: 'Reject',
        partyLabel: 'securitizer'
      },
      {
        argument: [
          { label: 'underlyingPoolCids', type: { argument: ILeafType.ContractId } },
        ],
        name: 'Withdraw',
        partyLabel: 'mortgagePoolHolder'
      },
    ],
    module: 'Main.MortgagePoolAgreementProposal',
    name: 'MortgagePoolAgreementProposal',
    signatory: 'mortgagePoolHolder',
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<MortgagePoolAgreementProposal> {
    return await createContract(daGrpc, props, this)
  }

  public async securitizerAccept(availableCusipCid: string, registry: string): Promise<MortgagePoolAgreement> {
    return (await this.exercise('Accept', { availableCusipCid, registry })).getFirst(MortgagePoolAgreement)
  }

  public async securitizerReject(underlyingPoolCids: string[]): Promise<MortgagePool[]> {
    return (await this.exercise('Reject', { underlyingPoolCids }))
      .getAllAsContracts(MortgagePool, underlyingPoolCids.length)
  }

  public async mortgagePoolHolderWithdraw(underlyingPoolCids: string[]): Promise<MortgagePool[]> {
    return (await this.exercise('Withdraw', { underlyingPoolCids }))
      .getAllAsContracts(MortgagePool, underlyingPoolCids.length)
  }

  public getUnderlyingCusips() { return this.argument.underlyingCusips.map(c => c.text) }
}
