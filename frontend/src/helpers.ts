import { isMoment } from 'moment';
import { IMortgagePoolAgreementDraftFields, IMortgagePoolAgreementFields, IMortgagePoolFields } from './contracts/CustomTypes';
import { prettyDate, prettyMoney } from './contracts/helpers';

export function mkDict<T extends object>(list: T[], getId: (t: T) => string): { [id: string]: T } {
  const dict = {};
  for (const t of list){
    const id = getId(t)
    if (id in dict) {
      console.error(Object.assign(
        new Error(`not uniq list (repeated id: ${id})`),
        { list, id, getId }
      ))
    } else {
      dict[id] = t
    }
  }
  return dict
}

export function getFromDict<T>(key: string, dict: { [key: string]: T }, defaultValue: T): T
export function getFromDict<T>(key: string, dict: { [key: string]: T }): T | undefined
export function getFromDict<T>(key: string, dict: { [key: string]: T }, defaultValue?: T): T | undefined {
  if (key in dict) {
    return dict[key]
  } else {
    if (defaultValue === undefined) {
      console.error('invalid key', { available: Object.keys(dict), expected: key, dict })
    }
    return defaultValue
  }
}

export function tap<T>(x: T, ...args: any[]): T { console.log(...args, x); return x }

export function EndlessPromise(): Promise<void> { return new Promise(() => {}) }

export function delay(ms: number): Promise<void> {
  return new Promise((resolve, _) => setTimeout(resolve, ms))
}

export interface ISerchable {
  searchIndex: string;
}

export function indexFields(
  fields: IMortgagePoolFields | IMortgagePoolAgreementDraftFields | IMortgagePoolAgreementFields
){
  let result = fields.poolType.constructor + fields.passThroughRate.toString()
  if ('cusip' in fields) {
    const poolFields = fields as IMortgagePoolFields
    result +=
      prettyMoney(poolFields.currentFaceValue) +
      poolFields.cusip.text +
      prettyDate(poolFields.issueDate) +
      prettyDate(poolFields.lastLoanMaturity) +
      prettyMoney(poolFields.originalFaceValue)
  } else {
    const draftOrAfreementFields = fields as IMortgagePoolAgreementDraftFields | IMortgagePoolAgreementFields
    result +=
      prettyMoney(draftOrAfreementFields.faceValue) +
      draftOrAfreementFields.referenceNumber +
      (isMoment(draftOrAfreementFields.lastLoanMaturity)
        ? prettyDate(draftOrAfreementFields.lastLoanMaturity)
        // tslint:disable-next-line:no-string-literal
        : "-")
  }
  return result
}
