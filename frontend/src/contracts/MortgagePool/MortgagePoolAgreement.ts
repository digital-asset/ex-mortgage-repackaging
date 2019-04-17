import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'
import { indexFields, ISerchable } from '../../helpers';
import { CUSIP, ICUSIP, IMortgagePoolAgreementFields, MortgagePoolAgreementFields } from '../CustomTypes';
import { IWithUnderlyingCusips } from './helpers';

interface IProps {
  mortgagePoolHolder: string,
  securitizer: string,
  operator: string,
  registry: string,
  cusip: ICUSIP,
  agreementFields: IMortgagePoolAgreementFields
  underlyingCusips: ICUSIP[],
  isReadyForIssuance: boolean,
}

export class MortgagePoolAgreement extends Contract<IProps> implements ISerchable, IWithUnderlyingCusips {
  public searchIndex = (
    indexFields(this.argument.agreementFields) +
    this.argument.cusip.text +
    this.getUnderlyingCusips().join('')
  ).toUpperCase()

  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'mortgagePoolHolder', type: ILeafType.Party },
      { label: 'securitizer', type: ILeafType.Party },
      { label: 'operator', type: ILeafType.Party },
      { label: 'registry', type: ILeafType.Party },
      { label: 'cusip', type: CUSIP },
      { label: 'agreementFields', type: MortgagePoolAgreementFields },
      { label: 'underlyingCusips', type: { argument: CUSIP } },
      { label: 'isReadyForIssuance', type: ILeafType.Bool },
    ],
    choices: [
      {
        argument: [
          { label: 'underlyingPoolCids', type: { argument: ILeafType.ContractId } },
        ],
        name: 'ReadyAgreementForIssuance',
        partyLabel: 'operator'
      },
      {
        argument: [],
        name: 'Archive',
        partyLabel: 'operator'
      },
    ],
    module: 'Main.MortgagePoolAgreement',
    name: 'MortgagePoolAgreement',
    signatory: 'noone' // TODO ['mortgagePoolHolder', 'securitizer']
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<MortgagePoolAgreement> {
    return await createContract(daGrpc, props, this)
  }

  public async operatorArchive(): Promise<void> {
    await this.exercise('Archive', {})
    return
  }

  public async operatorReadyAgreementForIssuance(underlyingPoolCids: string[]): Promise<MortgagePoolAgreement> {
    return (await this.exercise('ReadyAgreementForIssuance', { underlyingPoolCids })).getFirst(MortgagePoolAgreement)
  }

  public getUnderlyingCusips() { return this.argument.underlyingCusips.map(c => c.text) }
}
