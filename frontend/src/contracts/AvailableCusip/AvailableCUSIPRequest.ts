import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'
import { CUSIP, ICUSIP } from '../CustomTypes';
import { AvailableCUSIP } from './AvailableCUSIP';

interface IProps {
  securitizer: string,
  registry: string,
  numberRequested: number,
}

export class AvailableCUSIPRequest extends Contract<IProps> {
  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'securitizer', type: ILeafType.Party },
      { label: 'registry', type: ILeafType.Party },
      { label: 'numberRequested', type: ILeafType.Integer }
    ],
    choices: [
      {
        argument: [
          { label: 'cusips', type: { argument: CUSIP } }
        ],
        name: 'Fulfill',
        partyLabel: 'registry'
      },
    ],
    module: 'Main.AvailableCusip',
    name: 'AvailableCUSIPRequest',
    signatory: 'securitizer',
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<AvailableCUSIPRequest> {
    return await createContract(daGrpc, props, this)
  }

  public async registryFulfill(cusips: ICUSIP[]): Promise<AvailableCUSIP[]> {
    return (await this.exercise('Fulfill', { cusips }))
      .getAllAsContracts(AvailableCUSIP, cusips.length)
  }
}