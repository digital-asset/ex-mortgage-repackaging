import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'
import { indexFields, ISerchable } from '../../helpers';
import { CUSIP, ICUSIP, IMortgagePoolFields, MortgagePoolFields } from '../CustomTypes';

export interface IProps {
  owner: string,
  registry: string,
  operator: string,
  securitizers: string[],
  mortgagePoolFields: IMortgagePoolFields,
  underlyingCusips: ICUSIP[],
  isLocked: boolean
}

export class MortgagePool extends Contract<IProps> implements ISerchable {
  public searchIndex = (
    indexFields(this.argument.mortgagePoolFields) +
    this.argument.underlyingCusips.map(c => c.text).join('')
  ).toUpperCase()

  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'owner', type: ILeafType.Party },
      { label: 'registry', type: ILeafType.Party },
      { label: 'operator', type: ILeafType.Party },
      { label: 'securitizers', type: { argument: ILeafType.Party } },
      { label: 'mortgagePoolFields', type: MortgagePoolFields },
      { label: 'underlyingCusips', type: { argument: CUSIP } },
      { label: 'isLocked', type: ILeafType.Bool }
    ],
    choices: [
      {
        argument: [{ label: 'newOwner', type: ILeafType.Party }],
        name: 'Transfer',
        partyLabel: 'owner'
      },
      {
        argument: [],
        name: 'LockMortgagePool',
        partyLabel: 'owner'
      },
      {
        argument: [],
        name: 'UnlockMortgagePool',
        partyLabel: 'owner'
      },
      {
        argument: [{ label: 'securitizer', type: ILeafType.Party }],
        name: 'AddSecuritizer',
        partyLabel: 'owner'
      },
      {
        argument: [],
        name: 'Archive',
        partyLabel: 'owner'
      },
    ],
    module: 'Main.MortgagePool',
    name: 'MortgagePool',
    signatory: 'registry',
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<MortgagePool> {
    return await createContract(daGrpc, props, this)
  }

  public async ownerAddSecuritizer(securitizer: string): Promise<MortgagePool> {
    return (await this.exercise('AddSecuritizer', { securitizer })).getFirst(MortgagePool)
  }

  public async ownerArchive(): Promise<void> {
    await this.exercise('Archive', {})
    return
  }

  public async ownerTransfer(newOwner: string): Promise<MortgagePool> {
    return (await this.exercise('Transfer', { newOwner })).getFirst(MortgagePool)
  }

  public async ownerLockMortgagePool(): Promise<MortgagePool> {
    return (await this.exercise('LockMortgagePool', {})).getFirst(MortgagePool)
  }

  public async ownerUnlockMortgagePool(): Promise<MortgagePool> {
    return (await this.exercise('UnlockMortgagePool', {})).getFirst(MortgagePool)
  }
}
