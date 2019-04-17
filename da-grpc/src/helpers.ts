import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

export function newTimestamp(secondsOffset?: number): Timestamp {
  const timestamp = new Timestamp()
  timestamp.setSeconds((secondsOffset || 0))
  return timestamp
}

export interface ITransactionFilterElement {
  party: string,
  templateIds: string[] | undefined
}

export function newError(baseErrOrMessage: Error | string, args: object): Error {
  const err: Error = baseErrOrMessage instanceof Error
    ? baseErrOrMessage
    : typeof baseErrOrMessage === 'string'
      ? new Error(baseErrOrMessage)
      : new Error('unknown error')
  Object.assign(err, err.message === 'unknown error' ? { ...args, baseErrOrMessage } : args)
  return err
}

export function assertEqual(expected: any, actual: any, message?: string, args = {}): void {
  if (JSON.stringify(expected) !== JSON.stringify(actual)) {
    throw newError(message || 'assertEqual failed', { expected, actual, ...args })
  }
}


export type ISimpleLogger = (...args: any[]) => void
export interface ILogger {
  info?: ISimpleLogger,
  debug?: ISimpleLogger,
  error?: ISimpleLogger,
  warn?: ISimpleLogger,
}
export interface IFinalLogger {
  info: ISimpleLogger,
  debug: ISimpleLogger,
  error: ISimpleLogger,
  warn: ISimpleLogger,
}

export function mkLogger(prefix: any, override: ILogger): IFinalLogger {
  return {
    info: (...args: any[]) => console.info(prefix, ...args),
    debug: (...args: any[]) => console.debug(prefix, ...args),
    error: (...args: any[]) => console.error(prefix, ...args),
    warn: (...args: any[]) => console.warn(prefix, ...args),
    ...override,
  }
}
