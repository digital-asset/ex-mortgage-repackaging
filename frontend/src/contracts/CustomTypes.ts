import { ILeafType, IType } from '@da/da-grpc'
import { Moment } from 'moment';

function mkId(name: string){ return `Main.CustomTypes:${name}` }

// TODO export to da-grpc
export function Optional(type: IType): IType {
  return {
    valueType: type
  }
}

export interface ICUSIP { text: string }
export const CUSIP: IType = {
  argument: [{ label: 'text', type: ILeafType.Text }],
  datatypeId: mkId('CUSIP'),
}

export type IPoolTypeEnum = 'Fixed' | 'Floating'
export interface IPoolType { constructor: IPoolTypeEnum}
export const PoolType: IType = {
  argument: {
    Fixed: ILeafType.Unit,
    Floating: ILeafType.Unit
  },
  variantId: mkId('PoolType')
}

export interface IMortgagePoolFields {
  cusip: ICUSIP,
  poolType: IPoolType,
  passThroughRate: number,
  issueDate: Moment,
  lastLoanMaturity: Moment,
  originalFaceValue: number,
  currentFaceValue: number
}
export const MortgagePoolFields: IType = {
  argument: [
    { label: 'cusip', type: CUSIP },
    { label: 'poolType', type: PoolType },
    { label: 'passThroughRate', type: ILeafType.Decimal },
    { label: 'issueDate', type: ILeafType.Time },
    { label: 'lastLoanMaturity', type: ILeafType.Time },
    { label: 'originalFaceValue', type: ILeafType.Decimal },
    { label: 'currentFaceValue', type: ILeafType.Decimal }
  ],
  datatypeId: mkId('MortgagePoolFields')
}

export interface IMortgagePoolAgreementDraftFields {
  referenceNumber: string,
  poolType: IPoolType,
  passThroughRate: number,
  lastLoanMaturity: Moment | undefined,
  faceValue: number,
}
export const MortgagePoolAgreementDraftFields: IType = {
  argument: [
    { label: 'referenceNumber', type: ILeafType.Text },
    { label: 'poolType', type: PoolType },
    { label: 'passThroughRate', type: ILeafType.Decimal },
    { label: 'lastLoanMaturity', type: Optional(ILeafType.Time) },
    { label: 'faceValue', type: ILeafType.Decimal },
  ],
  datatypeId: mkId('MortgagePoolAgreementDraftFields')
}

export interface IMortgagePoolAgreementFields {
  referenceNumber: string,
  poolType: IPoolType,
  passThroughRate: number,
  lastLoanMaturity: Moment,
  faceValue: number
}
export const MortgagePoolAgreementFields: IType = {
  argument: [
    { label: 'referenceNumber', type: ILeafType.Text },
    { label: 'poolType', type: PoolType },
    { label: 'passThroughRate', type: ILeafType.Decimal },
    { label: 'lastLoanMaturity', type: ILeafType.Time },
    { label: 'faceValue', type: ILeafType.Decimal }
  ],
  datatypeId: mkId('MortgagePoolAgreementFields')
}
