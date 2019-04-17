import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'
import { IMortgagePoolFields, MortgagePoolFields } from '../CustomTypes';
import { MortgagePool } from '../MortgagePool/MortgagePool';

interface IProps {
  operator: string,
  registry: string
}

export class DelegatedRegistrationRights extends Contract<IProps> {
  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'operator', type: ILeafType.Party },
      { label: 'registry', type: ILeafType.Party }
    ],
    choices: [
      {
        argument: [
          { label: 'mortgagePoolAgreementCid', type: ILeafType.ContractId },
          { label: 'mortgagePoolFields', type: MortgagePoolFields }
        ],
        name: 'IssueMortgagePool',
        partyLabel: 'operator'
      },
      {
        argument: [],
        name: 'RevokeDelegationRights',
        partyLabel: 'registry'
      },
    ],
    module: 'Main.Delegation',
    name: 'DelegatedRegistrationRights',
    signatory: 'registry',
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<DelegatedRegistrationRights> {
    return await createContract(daGrpc, props, this)
  }

  public async operatorIssueMortgagePool(mortgagePoolAgreementCid: string, mortgagePoolFields: IMortgagePoolFields): Promise<MortgagePool> {
    return (await this.exercise('IssueMortgagePool', { mortgagePoolAgreementCid, mortgagePoolFields }))
      .getFirst(MortgagePool)
  }

  public async registryRevokeDelegationRights(): Promise<void> {
    await this.exercise('RevokeDelegationRights', {})
    return
  }
}
