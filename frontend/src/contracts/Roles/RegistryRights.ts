import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'
import { CUSIP, ICUSIP, IMortgagePoolFields, MortgagePoolFields } from '../CustomTypes';
import { DelegatedRegistrationRights } from '../Delegation/DelegatedRegistrationRights';
import { MortgagePool } from '../MortgagePool/MortgagePool';

interface IProps {
  registry: string,
  operator: string
}

export class RegistryRights extends Contract<IProps> {
  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'registry', type: ILeafType.Party },
      { label: 'operator', type: ILeafType.Party }
    ],
    choices: [
      {
        argument: [],
        name: 'DelegateRegistrationRights',
        partyLabel: 'registry'
      },
      {
        argument: [
          { label: 'owner', type: ILeafType.Party },
          { label: 'mortgagePoolFields', type: MortgagePoolFields },
          { label: 'underlyingCusips', type: { argument: CUSIP } }
        ],
        name: 'IssueMortgagePool',
        partyLabel: 'registry'
      }
    ],
    module: 'Main.Roles',
    name: 'RegistryRights',
    signatory: 'operator',
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<RegistryRights> {
    return await createContract(daGrpc, props, this)
  }

  public async registryDelegateRegistrationRights(): Promise<DelegatedRegistrationRights> {
    return (await this.exercise('DelegateRegistrationRights', {})).getFirst(DelegatedRegistrationRights)
  }

  public async registryIssueMortgagePool(
    owner: string, mortgagePoolFields: IMortgagePoolFields, underlyingCusips: ICUSIP[]
  ): Promise<MortgagePool>{
    return (await this.exercise('IssueMortgagePool', { mortgagePoolFields, owner, underlyingCusips }))
      .getFirst(MortgagePool)
  }
}
