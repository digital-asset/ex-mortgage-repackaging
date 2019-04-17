import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'

export interface IProps {
  mortgagePoolHolder: string,
  securitizer: string,
  mortgagePool: string,
}

export class MortgagePoolDisclosure extends Contract<IProps> {
  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'mortgagePoolHolder', type: ILeafType.Party },
      { label: 'securitizer', type: ILeafType.Party },
      { label: 'mortgagePool', type: ILeafType.ContractId }
    ],
    choices: [],
    module: 'Main.MortgagePool',
    name: 'MortgagePoolDisclosure',
    signatory: 'mortgagePoolHolder',
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<MortgagePoolDisclosure> {
    return await createContract(daGrpc, props, this)
  }
}

