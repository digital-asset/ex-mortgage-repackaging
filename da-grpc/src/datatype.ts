import { assertEqual, newError } from './helpers'
import { Value, List, Record, Identifier, RecordField, Variant, Optional } from "../local/com/digitalasset/ledger/api/v1/value_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import * as Moment from 'moment'
import { TemplateManager } from './template_manager';

function isILeafType(type: IType): type is ILeafType {
  return typeof type === 'number'
}
export enum ILeafType {
  Bool = Value.SumCase.BOOL,
  ContractId = Value.SumCase.CONTRACT_ID,
  Time = Value.SumCase.TIMESTAMP,
  Decimal = Value.SumCase.DECIMAL,
  Integer = Value.SumCase.INT64,
  RelTime = Value.SumCase.DATE,
  Unit = Value.SumCase.UNIT,
  Party = Value.SumCase.PARTY,
  Text = Value.SumCase.TEXT,
  Variant = Value.SumCase.VARIANT,
  Optional = Value.SumCase.OPTIONAL
}

const sumCaseSet = new Set([
  Value.SumCase.SUM_NOT_SET,
  Value.SumCase.RECORD,
  Value.SumCase.VARIANT,
  Value.SumCase.CONTRACT_ID,
  Value.SumCase.LIST,
  Value.SumCase.INT64,
  Value.SumCase.DECIMAL,
  Value.SumCase.TEXT,
  Value.SumCase.TIMESTAMP,
  Value.SumCase.PARTY,
  Value.SumCase.BOOL,
  Value.SumCase.UNIT,
  Value.SumCase.DATE,
  Value.SumCase.OPTIONAL
])

function typeToSumCase(type: IType, path?: any[]): Value.SumCase {
  // if `type` describes RECORD then `type.argument` should be a list of record fields types
  // otherwise, if `type` describes LIST then `type.argument` should represent ONE type for the whole list
  const sumCase = isILeafType(type)
    ? type as number as Value.SumCase
    : type['variantId']
      ? Value.SumCase.VARIANT
      : type['valueType']
        ? Value.SumCase.OPTIONAL
        : Array.isArray(type['argument'])
          ? Value.SumCase.RECORD
          : Value.SumCase.LIST
  if (sumCaseSet.has(sumCase)) {
    return sumCase
  } else {
    throw newError('invalid type', { type, path })
  }
}

function humanIType(sumCase: Value.SumCase | IType): string {
  switch(typeToSumCase(sumCase as IType)) {
    case Value.SumCase.SUM_NOT_SET: return 'SUM_NOT_SET'
    case Value.SumCase.RECORD: return 'RECORD'
    case Value.SumCase.VARIANT: return 'VARIANT'
    case Value.SumCase.CONTRACT_ID: return 'CONTRACT_ID'
    case Value.SumCase.LIST: return 'LIST'
    case Value.SumCase.INT64: return 'INT64'
    case Value.SumCase.DECIMAL: return 'DECIMAL'
    case Value.SumCase.TEXT: return 'TEXT'
    case Value.SumCase.TIMESTAMP: return 'TIMESTAMP'
    case Value.SumCase.PARTY: return 'PARTY'
    case Value.SumCase.BOOL: return 'BOOL'
    case Value.SumCase.UNIT: return 'UNIT'
    case Value.SumCase.DATE: return 'DATE'
    case Value.SumCase.OPTIONAL: return 'OPTIONAL'
  }
  throw newError("humanIType: unknown sum case, " + sumCase.toString, {})
}

export type IType = ILeafType | IDatatypeProto

export interface ILabeledType { label: string, type: IType }

export interface IDatatypeProtoRecord {
  argument: ILabeledType[],
  datatypeId?: string,
}

export interface IDatatypeProtoList {
  argument: IType,
}

export interface IDatatypeProtoVariant {
  variantId?: string,
  argument: { [name: string]: IType },
}

export interface IVariantInstance {
  constructor: string,
  argument?: any
}

export interface IDatatypeProtoOptional {
  valueType: IType,
}

export type IDatatypeProto = IDatatypeProtoRecord | IDatatypeProtoList | IDatatypeProtoVariant | IDatatypeProtoOptional

function newPath(path: any[] | undefined, firstElement: any, newElement: any): any[] {
  return path ? path.concat([newElement]) : [firstElement, newElement]
}

const secondsInDay = 86400
const secondsInMicrosecond = 0.000001

export class DatatypeManager {
  private verboseGrpcCommands = false
  constructor(private templateManager: TemplateManager){}

  writeRecordField(type: IType, value: any, label: string | undefined, path?: any[]): RecordField {
    path = newPath(path, { caller: 'writeRecordField', value }, label)
    const recordField = new RecordField()
    if (label) recordField.setLabel(label)
    recordField.setValue(this.write(type, value, path))
    return recordField
  }

  writeOptional(type: IType, value: any, path?: any[]): Optional {
    const opt = new Optional()
    if (value) {
      path = newPath(path, { caller: 'writeOptional', value }, "Some")
      opt.setValue(this.write(type, value, path))
    } else {
      opt.clearValue()
    }
    return opt
  }

  writeVariant(type: IDatatypeProtoVariant, { constructor, argument }: IVariantInstance, path?: any[]){
    path = newPath(path, { caller: 'writeVariant', argument }, type.variantId)
    const typeVariant = type.argument[constructor]
    if (typeVariant) {
      path.push(constructor)
      const variant = new Variant()
      variant.setConstructor(constructor)
      variant.setVariantId(this.writeIdentifier(type.variantId))
      // this.logger('writeVariant', { typeVariant, constructor, argument, valueAsObject: value.toObject(), value, valueSumCase: value.getSumCase() })
      variant.setValue(this.write(typeVariant, argument, path))
      return variant
    } else {
      throw newError('invalid constructor for given variant type', { available: Object.keys(type.argument), constructor, path })
    }
  }

  anyToMoment(input: any | Moment.Moment | string | number, unit: 'days' | 'microseconds'): Moment.Moment {
    return typeof input === 'number'
      ? Moment.unix(input * (unit === 'days' ? secondsInDay : secondsInMicrosecond))
      : Moment.isMoment(input)
        ? input
        : Moment(input)
  }

  anyToNumber(input: any | Moment.Moment | string | number, unit: 'days' | 'microseconds'): number {
    return typeof input === 'number'
      ? input
      : this.anyToMoment(input, unit).unix() / (unit === 'days' ? secondsInDay : secondsInMicrosecond)
  }

  setValue(value: Value, type: IType, argument: any, path?: string[]): boolean {
    switch (typeToSumCase(type, path)) {
      case Value.SumCase.BOOL: value.setBool(argument as boolean); return true;
      case Value.SumCase.CONTRACT_ID: value.setContractId(argument as string); return true;
      case Value.SumCase.DATE: value.setDate(this.anyToNumber(argument, 'days')); return true;
      case Value.SumCase.DECIMAL: value.setDecimal(argument.toString()); return true;
      case Value.SumCase.INT64: value.setInt64(argument as number); return true;
      case Value.SumCase.TIMESTAMP: value.setTimestamp(this.anyToNumber(argument, 'microseconds')); return true;
      case Value.SumCase.UNIT: value.setUnit(new Empty()); return true;
      case Value.SumCase.PARTY: value.setParty(argument as string); return true;
      case Value.SumCase.TEXT: value.setText(argument as string); return true;
      case Value.SumCase.LIST:
        const typeList = type as IDatatypeProtoList
        if (Array.isArray(argument)) {
          const list = new List()
          list.setElementsList(argument.map(a => this.write(typeList.argument, a, path)))
          value.setList(list)
        } else {
          throw newError('expected Array argument for given type', { type: typeList.argument, argument, path })
        }
        return true
      case Value.SumCase.RECORD:
        const typeRecord = type as IDatatypeProtoRecord
        if (typeof argument === 'object') {
          value.setRecord(this.writeRecord(typeRecord, argument, path))
        } else {
          throw newError('expected Object argument for given type', { typeRecord, argument, path })
        }
        return true
      case Value.SumCase.OPTIONAL:
        const typeOptional = type as IDatatypeProtoOptional
        value.setOptional(this.writeOptional(typeOptional.valueType, value, path))
        return true
      case Value.SumCase.VARIANT:
        const typeVariant = type as IDatatypeProtoVariant
        value.setVariant(this.writeVariant(typeVariant, argument, path))
        return true
      case Value.SumCase.SUM_NOT_SET: throw newError('invalid type', { type, path })
    }
    throw newError("setValue: unknown sum case, " + type.toString, {})
  }

  write(type: IType, argument: any, path?: string[]): Value {
    path = newPath(path, { caller: 'write', argument }, humanIType(type))
    const value = new Value()
    this.setValue(value, type, argument, path)
    if (value.getSumCase() !== typeToSumCase(type, path)) {
      throw newError('value hasn`t been set', { expected: typeToSumCase(type, path), actual: value.getSumCase(), path })
    }
    return value
  }

  writeIdentifier(name: string): Identifier {
    return this.templateManager.getIdentifier(name)
  }

  writeRecord(type: IDatatypeProtoRecord, argument: object, path?: any[]): Record {
    path = path ? path.concat([]) : [ { caller: 'writeRecord', argument }]
    const required = type.argument.map(p => p.label)
    const actual = new Set(Object.keys(argument))
    if ( required.filter(k => actual.has(k)).length !== required.length) {
      throw newError('invalid argument for given type', {
        expectedKeys: required,
        actualKeys: Object.keys(argument),
        path
      })
    } else {
      const record = new Record()
      if(type.argument.length == 0) {
        record.setFieldsList([]);
      }
      else {
      record.setFieldsList(type
        .argument
        .map(({label, type}) =>
          this.writeRecordField(type, argument[label], label, path)
        )
      )
      }
      if (type.datatypeId) {
        record.setRecordId(this.writeIdentifier(type.datatypeId))
      }
      return record
    }
  }

  readRecord(type: IDatatypeProtoRecord, record: Record, path?: any[]): object {
    path = path ? path.concat([]) : [{ caller: 'readRecord', record: record.toObject() }]
    const values = record.getFieldsList()
    if (this.verboseGrpcCommands) {
      assertEqual(
        type.argument.map(p => p.label),
        values.map(v => v.getLabel()),
        'invalid argument for given type',
        { path }
      )
      const name = record.getRecordId().getName()
      if (name !== type.datatypeId){
        console.warn(newError('invalid record name', { expected: type.datatypeId, actual: name, path }))
      }
    }

    const o = {}
    type.argument.forEach(({label, type}, i) =>
      o[label] = this.read(type, values[i].getValue(), path)
    )
    return o
  }

  read(type: IType, value: Value, path?: string[]): any {
    path = newPath(path, { caller: 'read', value }, humanIType(type))
    if (typeToSumCase(type) !== value.getSumCase()) {
      throw newError('bad getValue type', {
        actual: value.getSumCase(),
        actualHuman: humanIType(value.getSumCase()),
        expected: type,
        expectedHuman: humanIType(type),
        path
      })
    }
    switch (typeToSumCase(type)) {
      case Value.SumCase.BOOL: return value.getBool()
      case Value.SumCase.CONTRACT_ID: return value.getContractId()
      case Value.SumCase.DATE: return this.anyToMoment(value.getDate(), 'days')
      case Value.SumCase.DECIMAL: return parseFloat(value.getDecimal())
      case Value.SumCase.INT64: return value.getInt64()
      case Value.SumCase.TIMESTAMP: return this.anyToMoment(value.getTimestamp(), 'microseconds')
      case Value.SumCase.UNIT: return undefined
      case Value.SumCase.PARTY: return value.getParty()
      case Value.SumCase.TEXT: return value.getText()
      case Value.SumCase.OPTIONAL:
        const typeOptional = type as IDatatypeProtoOptional
        const opt = value.getOptional()
        if (opt.hasValue()) {
          return this.read(typeOptional.valueType, opt.getValue(), path)
        } else {
          return undefined
        }
      case Value.SumCase.LIST:
        const typeList = type as IDatatypeProtoList
        return value.getList().getElementsList().map(v => this.read(typeList.argument, v, path))
      case Value.SumCase.RECORD:
        const typeRecord = type as IDatatypeProtoRecord
        return this.readRecord(typeRecord, value.getRecord(), path)
      case Value.SumCase.VARIANT:
        const typeVariant = type as IDatatypeProtoVariant
        const variant = value.getVariant()
        let variantId = typeVariant.variantId
        if (this.verboseGrpcCommands) {
          variantId = variant.getVariantId().getName()
          if (typeVariant.variantId !== variantId) {
            throw newError('invalid variantId', { expected: variantId, actual: typeVariant.variantId, path })
          }
        }
        path.push(variantId)
        const constructor = variant.getConstructor()
        path.push(constructor)
        if (typeVariant.argument[constructor]) {
          const argument = this.read(
            typeVariant.argument[constructor],
            value.getVariant().getValue(),
            path
          )
          return argument ? { constructor, argument } : { constructor }
        } else {
          throw newError('invalid variantId for given type', {
            available: Object.keys(typeVariant.argument), variantId, path })
        }
    }
  }
}
