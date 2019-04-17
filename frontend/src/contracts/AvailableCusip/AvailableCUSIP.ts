import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'
import { CUSIP, ICUSIP } from '../CustomTypes';

interface IProps {
  securitizer: string,
  registry: string,
  cusip: ICUSIP,
}

export class AvailableCUSIP extends Contract<IProps> {
  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'securitizer', type: ILeafType.Party },
      { label: 'registry', type: ILeafType.Party },
      { label: 'cusip', type: CUSIP }
    ],
    choices: [
      {
        argument: [],
        name: 'Archive',
        partyLabel: 'securitizer'
      },
    ],
    module: 'Main.AvailableCusip',
    name: 'AvailableCUSIP',
    signatory: 'noone', // TODO ['securitizer', 'registry'],
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<AvailableCUSIP> {
    return await createContract(daGrpc, props, this)
  }

  public async securitizerArchive(): Promise<void> {
    await this.exercise('Archive', {})
    return
  }
}
