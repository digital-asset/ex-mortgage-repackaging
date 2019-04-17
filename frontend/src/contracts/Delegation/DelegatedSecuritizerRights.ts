import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'

interface IProps {
  securitizer: string,
  operator: string
}

export class DelegatedSecuritizerRights extends Contract<IProps> {
  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'securitizer', type: ILeafType.Party },
      { label: 'operator', type: ILeafType.Party }
    ],
    choices: [
      /* TODO
          controller operator can
      anytime TransferMortgagePool with mortgagePool: ContractId MortgagePool; newOwner: Party
        returning ContractId MortgagePool
        to securitizer does exercise mortgagePool Transfer with newOwner

    controller securitizer can
      RevokeDelegationRights
        returning {}
        to return {}
        */
    ],
    module: 'Main.Delegation',
    name: 'DelegatedSecuritizerRights',
    signatory: 'securitizer',
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<DelegatedSecuritizerRights> {
    return await createContract(daGrpc, props, this)
  }
}
