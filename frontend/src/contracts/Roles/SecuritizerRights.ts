import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'
import { AvailableCUSIPRequest } from '../AvailableCusip/AvailableCUSIPRequest';
import { DelegatedSecuritizerRights } from '../Delegation/DelegatedSecuritizerRights';

interface IProps {
  mortgagePoolHolder: string,
  operator: string
}

export class SecuritizerRights extends Contract<IProps> {
  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'securitizer', type: ILeafType.Party },
      { label: 'operator', type: ILeafType.Party }
    ],
    choices: [
      {
        argument: [],
        name: 'DelegateSecuritizerRights',
        partyLabel: 'securitizer'
      },
      {
        argument: [
          { label: 'registry', type: ILeafType.Party },
          { label: 'numberRequested', type: ILeafType.Integer },
        ],
        name: 'RequestCUSIPs',
        partyLabel: 'securitizer'
      }
    ],
    module: 'Main.Roles',
    name: 'SecuritizerRights',
    signatory: 'operator',
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<SecuritizerRights> {
    return await createContract(daGrpc, props, this)
  }

  public async securitizerDelegateSecuritizerRights(): Promise<DelegatedSecuritizerRights> {
    return (await this.exercise('DelegateSecuritizerRights', {}))
      .getFirst(DelegatedSecuritizerRights)
  }

  public async securitizerRequestCUSIPs(args: { registry: string, numberRequested: number }): Promise<AvailableCUSIPRequest> {
    return (await this.exercise('RequestCUSIPs', args)).getFirst(AvailableCUSIPRequest)
  }
}
