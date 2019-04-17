import { DaGrpc } from '@da/da-grpc'
import { inspect } from 'util'
import * as Populator from './Populate'

const defaultLedgerHost = 'localhost:7600'

function inspected(args: any[]){
  return args.map(a => inspect(a, false, 100, true))
}
function inspectedGRPC(args: any[]){
  return ['GRPC', ...inspected(args)]
}

const { parties, watchedParties } = Populator.consts(false)

async function main(grpcServer: string, fun: (args: Populator.IPopulate) => Promise<any>){
  try {
    const daGrpc = await DaGrpc.new({
      applicationId: 'mortgage-app-populator',
      grpcServer,
      logger: {
        debug: () => {},
        error: (...args: any[]) => console.error(...inspectedGRPC(args)),
        info: () => {}, // (...args: any[]) => console.info(...inspectedGRPC(args)),
        warn: (...args: any[]) => console.warn(...inspectedGRPC(args)),
      },
      useGrpcWeb: false,
      watchedParties
    })
    console.info('PARTIES', ...inspected([parties]))
    await fun({ daGrpc, parties })
    const { counts, sum } = await Populator.allContractsCounts(daGrpc)
    console.info(`${sum} ACTIVE CONTRACTS`, ...inspected([counts]))
  } catch(err) {
    console.error('unhandled error', ...inspected([err]))
  }
  process.exit()
}

const ledgerHost = process.env.SANDBOX_HOST || defaultLedgerHost

main(ledgerHost, Populator.populateBig,)
