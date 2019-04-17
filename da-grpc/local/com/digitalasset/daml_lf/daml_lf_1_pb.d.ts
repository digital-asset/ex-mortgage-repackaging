// package: daml_lf_1
// file: com/digitalasset/daml_lf/daml_lf_1.proto

import * as jspb from "google-protobuf";

export class Unit extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Unit.AsObject;
  static toObject(includeInstance: boolean, msg: Unit): Unit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Unit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Unit;
  static deserializeBinaryFromReader(message: Unit, reader: jspb.BinaryReader): Unit;
}

export namespace Unit {
  export type AsObject = {
  }
}

export class PackageRef extends jspb.Message {
  hasSelf(): boolean;
  clearSelf(): void;
  getSelf(): Unit | undefined;
  setSelf(value?: Unit): void;

  hasPackageId(): boolean;
  clearPackageId(): void;
  getPackageId(): string;
  setPackageId(value: string): void;

  getSumCase(): PackageRef.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageRef.AsObject;
  static toObject(includeInstance: boolean, msg: PackageRef): PackageRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackageRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageRef;
  static deserializeBinaryFromReader(message: PackageRef, reader: jspb.BinaryReader): PackageRef;
}

export namespace PackageRef {
  export type AsObject = {
    self?: Unit.AsObject,
    packageId: string,
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    SELF = 1,
    PACKAGE_ID = 2,
  }
}

export class DottedName extends jspb.Message {
  clearSegmentsList(): void;
  getSegmentsList(): Array<string>;
  setSegmentsList(value: Array<string>): void;
  addSegments(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DottedName.AsObject;
  static toObject(includeInstance: boolean, msg: DottedName): DottedName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DottedName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DottedName;
  static deserializeBinaryFromReader(message: DottedName, reader: jspb.BinaryReader): DottedName;
}

export namespace DottedName {
  export type AsObject = {
    segmentsList: Array<string>,
  }
}

export class ModuleRef extends jspb.Message {
  hasPackageRef(): boolean;
  clearPackageRef(): void;
  getPackageRef(): PackageRef | undefined;
  setPackageRef(value?: PackageRef): void;

  hasModuleName(): boolean;
  clearModuleName(): void;
  getModuleName(): DottedName | undefined;
  setModuleName(value?: DottedName): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleRef.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleRef): ModuleRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModuleRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleRef;
  static deserializeBinaryFromReader(message: ModuleRef, reader: jspb.BinaryReader): ModuleRef;
}

export namespace ModuleRef {
  export type AsObject = {
    packageRef?: PackageRef.AsObject,
    moduleName?: DottedName.AsObject,
  }
}

export class TypeConName extends jspb.Message {
  hasModule(): boolean;
  clearModule(): void;
  getModule(): ModuleRef | undefined;
  setModule(value?: ModuleRef): void;

  hasName(): boolean;
  clearName(): void;
  getName(): DottedName | undefined;
  setName(value?: DottedName): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeConName.AsObject;
  static toObject(includeInstance: boolean, msg: TypeConName): TypeConName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeConName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeConName;
  static deserializeBinaryFromReader(message: TypeConName, reader: jspb.BinaryReader): TypeConName;
}

export namespace TypeConName {
  export type AsObject = {
    module?: ModuleRef.AsObject,
    name?: DottedName.AsObject,
  }
}

export class ValName extends jspb.Message {
  hasModule(): boolean;
  clearModule(): void;
  getModule(): ModuleRef | undefined;
  setModule(value?: ModuleRef): void;

  clearNameList(): void;
  getNameList(): Array<string>;
  setNameList(value: Array<string>): void;
  addName(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValName.AsObject;
  static toObject(includeInstance: boolean, msg: ValName): ValName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValName;
  static deserializeBinaryFromReader(message: ValName, reader: jspb.BinaryReader): ValName;
}

export namespace ValName {
  export type AsObject = {
    module?: ModuleRef.AsObject,
    nameList: Array<string>,
  }
}

export class FieldWithType extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): Type | undefined;
  setType(value?: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldWithType.AsObject;
  static toObject(includeInstance: boolean, msg: FieldWithType): FieldWithType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldWithType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldWithType;
  static deserializeBinaryFromReader(message: FieldWithType, reader: jspb.BinaryReader): FieldWithType;
}

export namespace FieldWithType {
  export type AsObject = {
    field: string,
    type?: Type.AsObject,
  }
}

export class VarWithType extends jspb.Message {
  getVar(): string;
  setVar(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): Type | undefined;
  setType(value?: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VarWithType.AsObject;
  static toObject(includeInstance: boolean, msg: VarWithType): VarWithType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VarWithType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VarWithType;
  static deserializeBinaryFromReader(message: VarWithType, reader: jspb.BinaryReader): VarWithType;
}

export namespace VarWithType {
  export type AsObject = {
    pb_var: string,
    type?: Type.AsObject,
  }
}

export class TypeVarWithKind extends jspb.Message {
  getVar(): string;
  setVar(value: string): void;

  hasKind(): boolean;
  clearKind(): void;
  getKind(): Kind | undefined;
  setKind(value?: Kind): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeVarWithKind.AsObject;
  static toObject(includeInstance: boolean, msg: TypeVarWithKind): TypeVarWithKind.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeVarWithKind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeVarWithKind;
  static deserializeBinaryFromReader(message: TypeVarWithKind, reader: jspb.BinaryReader): TypeVarWithKind;
}

export namespace TypeVarWithKind {
  export type AsObject = {
    pb_var: string,
    kind?: Kind.AsObject,
  }
}

export class FieldWithExpr extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  hasExpr(): boolean;
  clearExpr(): void;
  getExpr(): Expr | undefined;
  setExpr(value?: Expr): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldWithExpr.AsObject;
  static toObject(includeInstance: boolean, msg: FieldWithExpr): FieldWithExpr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldWithExpr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldWithExpr;
  static deserializeBinaryFromReader(message: FieldWithExpr, reader: jspb.BinaryReader): FieldWithExpr;
}

export namespace FieldWithExpr {
  export type AsObject = {
    field: string,
    expr?: Expr.AsObject,
  }
}

export class Binding extends jspb.Message {
  hasBinder(): boolean;
  clearBinder(): void;
  getBinder(): VarWithType | undefined;
  setBinder(value?: VarWithType): void;

  hasBound(): boolean;
  clearBound(): void;
  getBound(): Expr | undefined;
  setBound(value?: Expr): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Binding.AsObject;
  static toObject(includeInstance: boolean, msg: Binding): Binding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Binding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Binding;
  static deserializeBinaryFromReader(message: Binding, reader: jspb.BinaryReader): Binding;
}

export namespace Binding {
  export type AsObject = {
    binder?: VarWithType.AsObject,
    bound?: Expr.AsObject,
  }
}

export class Kind extends jspb.Message {
  hasStar(): boolean;
  clearStar(): void;
  getStar(): Unit | undefined;
  setStar(value?: Unit): void;

  hasArrow(): boolean;
  clearArrow(): void;
  getArrow(): Kind.Arrow | undefined;
  setArrow(value?: Kind.Arrow): void;

  getSumCase(): Kind.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Kind.AsObject;
  static toObject(includeInstance: boolean, msg: Kind): Kind.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Kind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Kind;
  static deserializeBinaryFromReader(message: Kind, reader: jspb.BinaryReader): Kind;
}

export namespace Kind {
  export type AsObject = {
    star?: Unit.AsObject,
    arrow?: Kind.Arrow.AsObject,
  }

  export class Arrow extends jspb.Message {
    clearParamsList(): void;
    getParamsList(): Array<Kind>;
    setParamsList(value: Array<Kind>): void;
    addParams(value?: Kind, index?: number): Kind;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): Kind | undefined;
    setResult(value?: Kind): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Arrow.AsObject;
    static toObject(includeInstance: boolean, msg: Arrow): Arrow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Arrow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Arrow;
    static deserializeBinaryFromReader(message: Arrow, reader: jspb.BinaryReader): Arrow;
  }

  export namespace Arrow {
    export type AsObject = {
      paramsList: Array<Kind.AsObject>,
      result?: Kind.AsObject,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    STAR = 1,
    ARROW = 2,
  }
}

export class Type extends jspb.Message {
  hasVar(): boolean;
  clearVar(): void;
  getVar(): Type.Var | undefined;
  setVar(value?: Type.Var): void;

  hasCon(): boolean;
  clearCon(): void;
  getCon(): Type.Con | undefined;
  setCon(value?: Type.Con): void;

  hasPrim(): boolean;
  clearPrim(): void;
  getPrim(): Type.Prim | undefined;
  setPrim(value?: Type.Prim): void;

  hasFun(): boolean;
  clearFun(): void;
  getFun(): Type.Fun | undefined;
  setFun(value?: Type.Fun): void;

  hasForall(): boolean;
  clearForall(): void;
  getForall(): Type.Forall | undefined;
  setForall(value?: Type.Forall): void;

  hasTuple(): boolean;
  clearTuple(): void;
  getTuple(): Type.Tuple | undefined;
  setTuple(value?: Type.Tuple): void;

  getSumCase(): Type.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Type.AsObject;
  static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Type;
  static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
}

export namespace Type {
  export type AsObject = {
    pb_var?: Type.Var.AsObject,
    con?: Type.Con.AsObject,
    prim?: Type.Prim.AsObject,
    fun?: Type.Fun.AsObject,
    forall?: Type.Forall.AsObject,
    tuple?: Type.Tuple.AsObject,
  }

  export class Var extends jspb.Message {
    getVar(): string;
    setVar(value: string): void;

    clearArgsList(): void;
    getArgsList(): Array<Type>;
    setArgsList(value: Array<Type>): void;
    addArgs(value?: Type, index?: number): Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Var.AsObject;
    static toObject(includeInstance: boolean, msg: Var): Var.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Var, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Var;
    static deserializeBinaryFromReader(message: Var, reader: jspb.BinaryReader): Var;
  }

  export namespace Var {
    export type AsObject = {
      pb_var: string,
      argsList: Array<Type.AsObject>,
    }
  }

  export class Con extends jspb.Message {
    hasTycon(): boolean;
    clearTycon(): void;
    getTycon(): TypeConName | undefined;
    setTycon(value?: TypeConName): void;

    clearArgsList(): void;
    getArgsList(): Array<Type>;
    setArgsList(value: Array<Type>): void;
    addArgs(value?: Type, index?: number): Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Con.AsObject;
    static toObject(includeInstance: boolean, msg: Con): Con.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Con, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Con;
    static deserializeBinaryFromReader(message: Con, reader: jspb.BinaryReader): Con;
  }

  export namespace Con {
    export type AsObject = {
      tycon?: TypeConName.AsObject,
      argsList: Array<Type.AsObject>,
    }
  }

  export class Prim extends jspb.Message {
    getPrim(): PrimType;
    setPrim(value: PrimType): void;

    clearArgsList(): void;
    getArgsList(): Array<Type>;
    setArgsList(value: Array<Type>): void;
    addArgs(value?: Type, index?: number): Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Prim.AsObject;
    static toObject(includeInstance: boolean, msg: Prim): Prim.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Prim, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Prim;
    static deserializeBinaryFromReader(message: Prim, reader: jspb.BinaryReader): Prim;
  }

  export namespace Prim {
    export type AsObject = {
      prim: PrimType,
      argsList: Array<Type.AsObject>,
    }
  }

  export class Fun extends jspb.Message {
    clearParamsList(): void;
    getParamsList(): Array<Type>;
    setParamsList(value: Array<Type>): void;
    addParams(value?: Type, index?: number): Type;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): Type | undefined;
    setResult(value?: Type): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fun.AsObject;
    static toObject(includeInstance: boolean, msg: Fun): Fun.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fun, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fun;
    static deserializeBinaryFromReader(message: Fun, reader: jspb.BinaryReader): Fun;
  }

  export namespace Fun {
    export type AsObject = {
      paramsList: Array<Type.AsObject>,
      result?: Type.AsObject,
    }
  }

  export class Forall extends jspb.Message {
    clearVarsList(): void;
    getVarsList(): Array<TypeVarWithKind>;
    setVarsList(value: Array<TypeVarWithKind>): void;
    addVars(value?: TypeVarWithKind, index?: number): TypeVarWithKind;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Type | undefined;
    setBody(value?: Type): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Forall.AsObject;
    static toObject(includeInstance: boolean, msg: Forall): Forall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Forall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Forall;
    static deserializeBinaryFromReader(message: Forall, reader: jspb.BinaryReader): Forall;
  }

  export namespace Forall {
    export type AsObject = {
      varsList: Array<TypeVarWithKind.AsObject>,
      body?: Type.AsObject,
    }
  }

  export class Tuple extends jspb.Message {
    clearFieldsList(): void;
    getFieldsList(): Array<FieldWithType>;
    setFieldsList(value: Array<FieldWithType>): void;
    addFields(value?: FieldWithType, index?: number): FieldWithType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tuple.AsObject;
    static toObject(includeInstance: boolean, msg: Tuple): Tuple.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tuple, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tuple;
    static deserializeBinaryFromReader(message: Tuple, reader: jspb.BinaryReader): Tuple;
  }

  export namespace Tuple {
    export type AsObject = {
      fieldsList: Array<FieldWithType.AsObject>,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    VAR = 1,
    CON = 2,
    PRIM = 3,
    FUN = 4,
    FORALL = 5,
    TUPLE = 7,
  }
}

export class PrimLit extends jspb.Message {
  hasInt64(): boolean;
  clearInt64(): void;
  getInt64(): number;
  setInt64(value: number): void;

  hasDecimal(): boolean;
  clearDecimal(): void;
  getDecimal(): string;
  setDecimal(value: string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): number;
  setTimestamp(value: number): void;

  hasParty(): boolean;
  clearParty(): void;
  getParty(): string;
  setParty(value: string): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): number;
  setDate(value: number): void;

  getSumCase(): PrimLit.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrimLit.AsObject;
  static toObject(includeInstance: boolean, msg: PrimLit): PrimLit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrimLit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrimLit;
  static deserializeBinaryFromReader(message: PrimLit, reader: jspb.BinaryReader): PrimLit;
}

export namespace PrimLit {
  export type AsObject = {
    int64: number,
    decimal: string,
    text: string,
    timestamp: number,
    party: string,
    date: number,
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    INT64 = 1,
    DECIMAL = 2,
    TEXT = 4,
    TIMESTAMP = 5,
    PARTY = 7,
    DATE = 8,
  }
}

export class Location extends jspb.Message {
  hasModule(): boolean;
  clearModule(): void;
  getModule(): ModuleRef | undefined;
  setModule(value?: ModuleRef): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): Location.Range | undefined;
  setRange(value?: Location.Range): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    module?: ModuleRef.AsObject,
    range?: Location.Range.AsObject,
  }

  export class Range extends jspb.Message {
    getStartLine(): number;
    setStartLine(value: number): void;

    getStartCol(): number;
    setStartCol(value: number): void;

    getEndLine(): number;
    setEndLine(value: number): void;

    getEndCol(): number;
    setEndCol(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Range.AsObject;
    static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Range;
    static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
  }

  export namespace Range {
    export type AsObject = {
      startLine: number,
      startCol: number,
      endLine: number,
      endCol: number,
    }
  }
}

export class Expr extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  hasVar(): boolean;
  clearVar(): void;
  getVar(): string;
  setVar(value: string): void;

  hasVal(): boolean;
  clearVal(): void;
  getVal(): ValName | undefined;
  setVal(value?: ValName): void;

  hasBuiltin(): boolean;
  clearBuiltin(): void;
  getBuiltin(): BuiltinFunction;
  setBuiltin(value: BuiltinFunction): void;

  hasPrimCon(): boolean;
  clearPrimCon(): void;
  getPrimCon(): PrimCon;
  setPrimCon(value: PrimCon): void;

  hasPrimLit(): boolean;
  clearPrimLit(): void;
  getPrimLit(): PrimLit | undefined;
  setPrimLit(value?: PrimLit): void;

  hasRecCon(): boolean;
  clearRecCon(): void;
  getRecCon(): Expr.RecCon | undefined;
  setRecCon(value?: Expr.RecCon): void;

  hasRecProj(): boolean;
  clearRecProj(): void;
  getRecProj(): Expr.RecProj | undefined;
  setRecProj(value?: Expr.RecProj): void;

  hasRecUpd(): boolean;
  clearRecUpd(): void;
  getRecUpd(): Expr.RecUpd | undefined;
  setRecUpd(value?: Expr.RecUpd): void;

  hasVariantCon(): boolean;
  clearVariantCon(): void;
  getVariantCon(): Expr.VariantCon | undefined;
  setVariantCon(value?: Expr.VariantCon): void;

  hasTupleCon(): boolean;
  clearTupleCon(): void;
  getTupleCon(): Expr.TupleCon | undefined;
  setTupleCon(value?: Expr.TupleCon): void;

  hasTupleProj(): boolean;
  clearTupleProj(): void;
  getTupleProj(): Expr.TupleProj | undefined;
  setTupleProj(value?: Expr.TupleProj): void;

  hasTupleUpd(): boolean;
  clearTupleUpd(): void;
  getTupleUpd(): Expr.TupleUpd | undefined;
  setTupleUpd(value?: Expr.TupleUpd): void;

  hasApp(): boolean;
  clearApp(): void;
  getApp(): Expr.App | undefined;
  setApp(value?: Expr.App): void;

  hasTyApp(): boolean;
  clearTyApp(): void;
  getTyApp(): Expr.TyApp | undefined;
  setTyApp(value?: Expr.TyApp): void;

  hasAbs(): boolean;
  clearAbs(): void;
  getAbs(): Expr.Abs | undefined;
  setAbs(value?: Expr.Abs): void;

  hasTyAbs(): boolean;
  clearTyAbs(): void;
  getTyAbs(): Expr.TyAbs | undefined;
  setTyAbs(value?: Expr.TyAbs): void;

  hasCase(): boolean;
  clearCase(): void;
  getCase(): Case | undefined;
  setCase(value?: Case): void;

  hasLet(): boolean;
  clearLet(): void;
  getLet(): Block | undefined;
  setLet(value?: Block): void;

  hasNil(): boolean;
  clearNil(): void;
  getNil(): Expr.Nil | undefined;
  setNil(value?: Expr.Nil): void;

  hasCons(): boolean;
  clearCons(): void;
  getCons(): Expr.Cons | undefined;
  setCons(value?: Expr.Cons): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): Update | undefined;
  setUpdate(value?: Update): void;

  hasScenario(): boolean;
  clearScenario(): void;
  getScenario(): Scenario | undefined;
  setScenario(value?: Scenario): void;

  hasNone(): boolean;
  clearNone(): void;
  getNone(): Expr.None | undefined;
  setNone(value?: Expr.None): void;

  hasSome(): boolean;
  clearSome(): void;
  getSome(): Expr.Some | undefined;
  setSome(value?: Expr.Some): void;

  getSumCase(): Expr.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Expr.AsObject;
  static toObject(includeInstance: boolean, msg: Expr): Expr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Expr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Expr;
  static deserializeBinaryFromReader(message: Expr, reader: jspb.BinaryReader): Expr;
}

export namespace Expr {
  export type AsObject = {
    location?: Location.AsObject,
    pb_var: string,
    val?: ValName.AsObject,
    builtin: BuiltinFunction,
    primCon: PrimCon,
    primLit?: PrimLit.AsObject,
    recCon?: Expr.RecCon.AsObject,
    recProj?: Expr.RecProj.AsObject,
    recUpd?: Expr.RecUpd.AsObject,
    variantCon?: Expr.VariantCon.AsObject,
    tupleCon?: Expr.TupleCon.AsObject,
    tupleProj?: Expr.TupleProj.AsObject,
    tupleUpd?: Expr.TupleUpd.AsObject,
    app?: Expr.App.AsObject,
    tyApp?: Expr.TyApp.AsObject,
    abs?: Expr.Abs.AsObject,
    tyAbs?: Expr.TyAbs.AsObject,
    pb_case?: Case.AsObject,
    let?: Block.AsObject,
    nil?: Expr.Nil.AsObject,
    cons?: Expr.Cons.AsObject,
    update?: Update.AsObject,
    scenario?: Scenario.AsObject,
    none?: Expr.None.AsObject,
    some?: Expr.Some.AsObject,
  }

  export class RecCon extends jspb.Message {
    hasTycon(): boolean;
    clearTycon(): void;
    getTycon(): Type.Con | undefined;
    setTycon(value?: Type.Con): void;

    clearFieldsList(): void;
    getFieldsList(): Array<FieldWithExpr>;
    setFieldsList(value: Array<FieldWithExpr>): void;
    addFields(value?: FieldWithExpr, index?: number): FieldWithExpr;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecCon.AsObject;
    static toObject(includeInstance: boolean, msg: RecCon): RecCon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecCon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecCon;
    static deserializeBinaryFromReader(message: RecCon, reader: jspb.BinaryReader): RecCon;
  }

  export namespace RecCon {
    export type AsObject = {
      tycon?: Type.Con.AsObject,
      fieldsList: Array<FieldWithExpr.AsObject>,
    }
  }

  export class RecProj extends jspb.Message {
    hasTycon(): boolean;
    clearTycon(): void;
    getTycon(): Type.Con | undefined;
    setTycon(value?: Type.Con): void;

    getField(): string;
    setField(value: string): void;

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): Expr | undefined;
    setRecord(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecProj.AsObject;
    static toObject(includeInstance: boolean, msg: RecProj): RecProj.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecProj, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecProj;
    static deserializeBinaryFromReader(message: RecProj, reader: jspb.BinaryReader): RecProj;
  }

  export namespace RecProj {
    export type AsObject = {
      tycon?: Type.Con.AsObject,
      field: string,
      record?: Expr.AsObject,
    }
  }

  export class RecUpd extends jspb.Message {
    hasTycon(): boolean;
    clearTycon(): void;
    getTycon(): Type.Con | undefined;
    setTycon(value?: Type.Con): void;

    getField(): string;
    setField(value: string): void;

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): Expr | undefined;
    setRecord(value?: Expr): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): Expr | undefined;
    setUpdate(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecUpd.AsObject;
    static toObject(includeInstance: boolean, msg: RecUpd): RecUpd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecUpd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecUpd;
    static deserializeBinaryFromReader(message: RecUpd, reader: jspb.BinaryReader): RecUpd;
  }

  export namespace RecUpd {
    export type AsObject = {
      tycon?: Type.Con.AsObject,
      field: string,
      record?: Expr.AsObject,
      update?: Expr.AsObject,
    }
  }

  export class VariantCon extends jspb.Message {
    hasTycon(): boolean;
    clearTycon(): void;
    getTycon(): Type.Con | undefined;
    setTycon(value?: Type.Con): void;

    getVariantCon(): string;
    setVariantCon(value: string): void;

    hasVariantArg(): boolean;
    clearVariantArg(): void;
    getVariantArg(): Expr | undefined;
    setVariantArg(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VariantCon.AsObject;
    static toObject(includeInstance: boolean, msg: VariantCon): VariantCon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VariantCon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VariantCon;
    static deserializeBinaryFromReader(message: VariantCon, reader: jspb.BinaryReader): VariantCon;
  }

  export namespace VariantCon {
    export type AsObject = {
      tycon?: Type.Con.AsObject,
      variantCon: string,
      variantArg?: Expr.AsObject,
    }
  }

  export class TupleCon extends jspb.Message {
    clearFieldsList(): void;
    getFieldsList(): Array<FieldWithExpr>;
    setFieldsList(value: Array<FieldWithExpr>): void;
    addFields(value?: FieldWithExpr, index?: number): FieldWithExpr;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TupleCon.AsObject;
    static toObject(includeInstance: boolean, msg: TupleCon): TupleCon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TupleCon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TupleCon;
    static deserializeBinaryFromReader(message: TupleCon, reader: jspb.BinaryReader): TupleCon;
  }

  export namespace TupleCon {
    export type AsObject = {
      fieldsList: Array<FieldWithExpr.AsObject>,
    }
  }

  export class TupleProj extends jspb.Message {
    getField(): string;
    setField(value: string): void;

    hasTuple(): boolean;
    clearTuple(): void;
    getTuple(): Expr | undefined;
    setTuple(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TupleProj.AsObject;
    static toObject(includeInstance: boolean, msg: TupleProj): TupleProj.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TupleProj, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TupleProj;
    static deserializeBinaryFromReader(message: TupleProj, reader: jspb.BinaryReader): TupleProj;
  }

  export namespace TupleProj {
    export type AsObject = {
      field: string,
      tuple?: Expr.AsObject,
    }
  }

  export class TupleUpd extends jspb.Message {
    getField(): string;
    setField(value: string): void;

    hasTuple(): boolean;
    clearTuple(): void;
    getTuple(): Expr | undefined;
    setTuple(value?: Expr): void;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): Expr | undefined;
    setUpdate(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TupleUpd.AsObject;
    static toObject(includeInstance: boolean, msg: TupleUpd): TupleUpd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TupleUpd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TupleUpd;
    static deserializeBinaryFromReader(message: TupleUpd, reader: jspb.BinaryReader): TupleUpd;
  }

  export namespace TupleUpd {
    export type AsObject = {
      field: string,
      tuple?: Expr.AsObject,
      update?: Expr.AsObject,
    }
  }

  export class App extends jspb.Message {
    hasFun(): boolean;
    clearFun(): void;
    getFun(): Expr | undefined;
    setFun(value?: Expr): void;

    clearArgsList(): void;
    getArgsList(): Array<Expr>;
    setArgsList(value: Array<Expr>): void;
    addArgs(value?: Expr, index?: number): Expr;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): App.AsObject;
    static toObject(includeInstance: boolean, msg: App): App.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: App, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): App;
    static deserializeBinaryFromReader(message: App, reader: jspb.BinaryReader): App;
  }

  export namespace App {
    export type AsObject = {
      fun?: Expr.AsObject,
      argsList: Array<Expr.AsObject>,
    }
  }

  export class TyApp extends jspb.Message {
    hasExpr(): boolean;
    clearExpr(): void;
    getExpr(): Expr | undefined;
    setExpr(value?: Expr): void;

    clearTypesList(): void;
    getTypesList(): Array<Type>;
    setTypesList(value: Array<Type>): void;
    addTypes(value?: Type, index?: number): Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TyApp.AsObject;
    static toObject(includeInstance: boolean, msg: TyApp): TyApp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TyApp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TyApp;
    static deserializeBinaryFromReader(message: TyApp, reader: jspb.BinaryReader): TyApp;
  }

  export namespace TyApp {
    export type AsObject = {
      expr?: Expr.AsObject,
      typesList: Array<Type.AsObject>,
    }
  }

  export class Abs extends jspb.Message {
    clearParamList(): void;
    getParamList(): Array<VarWithType>;
    setParamList(value: Array<VarWithType>): void;
    addParam(value?: VarWithType, index?: number): VarWithType;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Expr | undefined;
    setBody(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Abs.AsObject;
    static toObject(includeInstance: boolean, msg: Abs): Abs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Abs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Abs;
    static deserializeBinaryFromReader(message: Abs, reader: jspb.BinaryReader): Abs;
  }

  export namespace Abs {
    export type AsObject = {
      paramList: Array<VarWithType.AsObject>,
      body?: Expr.AsObject,
    }
  }

  export class TyAbs extends jspb.Message {
    clearParamList(): void;
    getParamList(): Array<TypeVarWithKind>;
    setParamList(value: Array<TypeVarWithKind>): void;
    addParam(value?: TypeVarWithKind, index?: number): TypeVarWithKind;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Expr | undefined;
    setBody(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TyAbs.AsObject;
    static toObject(includeInstance: boolean, msg: TyAbs): TyAbs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TyAbs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TyAbs;
    static deserializeBinaryFromReader(message: TyAbs, reader: jspb.BinaryReader): TyAbs;
  }

  export namespace TyAbs {
    export type AsObject = {
      paramList: Array<TypeVarWithKind.AsObject>,
      body?: Expr.AsObject,
    }
  }

  export class Nil extends jspb.Message {
    hasType(): boolean;
    clearType(): void;
    getType(): Type | undefined;
    setType(value?: Type): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nil.AsObject;
    static toObject(includeInstance: boolean, msg: Nil): Nil.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Nil, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nil;
    static deserializeBinaryFromReader(message: Nil, reader: jspb.BinaryReader): Nil;
  }

  export namespace Nil {
    export type AsObject = {
      type?: Type.AsObject,
    }
  }

  export class Cons extends jspb.Message {
    hasType(): boolean;
    clearType(): void;
    getType(): Type | undefined;
    setType(value?: Type): void;

    clearFrontList(): void;
    getFrontList(): Array<Expr>;
    setFrontList(value: Array<Expr>): void;
    addFront(value?: Expr, index?: number): Expr;

    hasTail(): boolean;
    clearTail(): void;
    getTail(): Expr | undefined;
    setTail(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cons.AsObject;
    static toObject(includeInstance: boolean, msg: Cons): Cons.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cons, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cons;
    static deserializeBinaryFromReader(message: Cons, reader: jspb.BinaryReader): Cons;
  }

  export namespace Cons {
    export type AsObject = {
      type?: Type.AsObject,
      frontList: Array<Expr.AsObject>,
      tail?: Expr.AsObject,
    }
  }

  export class None extends jspb.Message {
    hasType(): boolean;
    clearType(): void;
    getType(): Type | undefined;
    setType(value?: Type): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): None.AsObject;
    static toObject(includeInstance: boolean, msg: None): None.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: None, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): None;
    static deserializeBinaryFromReader(message: None, reader: jspb.BinaryReader): None;
  }

  export namespace None {
    export type AsObject = {
      type?: Type.AsObject,
    }
  }

  export class Some extends jspb.Message {
    hasType(): boolean;
    clearType(): void;
    getType(): Type | undefined;
    setType(value?: Type): void;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Expr | undefined;
    setBody(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Some.AsObject;
    static toObject(includeInstance: boolean, msg: Some): Some.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Some, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Some;
    static deserializeBinaryFromReader(message: Some, reader: jspb.BinaryReader): Some;
  }

  export namespace Some {
    export type AsObject = {
      type?: Type.AsObject,
      body?: Expr.AsObject,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    VAR = 1,
    VAL = 2,
    BUILTIN = 3,
    PRIM_CON = 4,
    PRIM_LIT = 5,
    REC_CON = 6,
    REC_PROJ = 7,
    REC_UPD = 22,
    VARIANT_CON = 8,
    TUPLE_CON = 9,
    TUPLE_PROJ = 10,
    TUPLE_UPD = 23,
    APP = 11,
    TY_APP = 12,
    ABS = 13,
    TY_ABS = 14,
    CASE = 15,
    LET = 16,
    NIL = 17,
    CONS = 18,
    UPDATE = 20,
    SCENARIO = 21,
    NONE = 26,
    SOME = 27,
  }
}

export class CaseAlt extends jspb.Message {
  hasDefault(): boolean;
  clearDefault(): void;
  getDefault(): Unit | undefined;
  setDefault(value?: Unit): void;

  hasVariant(): boolean;
  clearVariant(): void;
  getVariant(): CaseAlt.Variant | undefined;
  setVariant(value?: CaseAlt.Variant): void;

  hasPrimCon(): boolean;
  clearPrimCon(): void;
  getPrimCon(): PrimCon;
  setPrimCon(value: PrimCon): void;

  hasNil(): boolean;
  clearNil(): void;
  getNil(): Unit | undefined;
  setNil(value?: Unit): void;

  hasCons(): boolean;
  clearCons(): void;
  getCons(): CaseAlt.Cons | undefined;
  setCons(value?: CaseAlt.Cons): void;

  hasNone(): boolean;
  clearNone(): void;
  getNone(): Unit | undefined;
  setNone(value?: Unit): void;

  hasSome(): boolean;
  clearSome(): void;
  getSome(): CaseAlt.Some | undefined;
  setSome(value?: CaseAlt.Some): void;

  hasBody(): boolean;
  clearBody(): void;
  getBody(): Expr | undefined;
  setBody(value?: Expr): void;

  getSumCase(): CaseAlt.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CaseAlt.AsObject;
  static toObject(includeInstance: boolean, msg: CaseAlt): CaseAlt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CaseAlt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CaseAlt;
  static deserializeBinaryFromReader(message: CaseAlt, reader: jspb.BinaryReader): CaseAlt;
}

export namespace CaseAlt {
  export type AsObject = {
    pb_default?: Unit.AsObject,
    variant?: CaseAlt.Variant.AsObject,
    primCon: PrimCon,
    nil?: Unit.AsObject,
    cons?: CaseAlt.Cons.AsObject,
    none?: Unit.AsObject,
    some?: CaseAlt.Some.AsObject,
    body?: Expr.AsObject,
  }

  export class Variant extends jspb.Message {
    hasCon(): boolean;
    clearCon(): void;
    getCon(): TypeConName | undefined;
    setCon(value?: TypeConName): void;

    getVariant(): string;
    setVariant(value: string): void;

    getBinder(): string;
    setBinder(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Variant.AsObject;
    static toObject(includeInstance: boolean, msg: Variant): Variant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Variant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Variant;
    static deserializeBinaryFromReader(message: Variant, reader: jspb.BinaryReader): Variant;
  }

  export namespace Variant {
    export type AsObject = {
      con?: TypeConName.AsObject,
      variant: string,
      binder: string,
    }
  }

  export class Cons extends jspb.Message {
    getVarHead(): string;
    setVarHead(value: string): void;

    getVarTail(): string;
    setVarTail(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cons.AsObject;
    static toObject(includeInstance: boolean, msg: Cons): Cons.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cons, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cons;
    static deserializeBinaryFromReader(message: Cons, reader: jspb.BinaryReader): Cons;
  }

  export namespace Cons {
    export type AsObject = {
      varHead: string,
      varTail: string,
    }
  }

  export class Some extends jspb.Message {
    getVarBody(): string;
    setVarBody(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Some.AsObject;
    static toObject(includeInstance: boolean, msg: Some): Some.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Some, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Some;
    static deserializeBinaryFromReader(message: Some, reader: jspb.BinaryReader): Some;
  }

  export namespace Some {
    export type AsObject = {
      varBody: string,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    DEFAULT = 1,
    VARIANT = 2,
    PRIM_CON = 3,
    NIL = 4,
    CONS = 5,
    NONE = 7,
    SOME = 8,
  }
}

export class Case extends jspb.Message {
  hasScrut(): boolean;
  clearScrut(): void;
  getScrut(): Expr | undefined;
  setScrut(value?: Expr): void;

  clearAltsList(): void;
  getAltsList(): Array<CaseAlt>;
  setAltsList(value: Array<CaseAlt>): void;
  addAlts(value?: CaseAlt, index?: number): CaseAlt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Case.AsObject;
  static toObject(includeInstance: boolean, msg: Case): Case.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Case, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Case;
  static deserializeBinaryFromReader(message: Case, reader: jspb.BinaryReader): Case;
}

export namespace Case {
  export type AsObject = {
    scrut?: Expr.AsObject,
    altsList: Array<CaseAlt.AsObject>,
  }
}

export class Block extends jspb.Message {
  clearBindingsList(): void;
  getBindingsList(): Array<Binding>;
  setBindingsList(value: Array<Binding>): void;
  addBindings(value?: Binding, index?: number): Binding;

  hasBody(): boolean;
  clearBody(): void;
  getBody(): Expr | undefined;
  setBody(value?: Expr): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    bindingsList: Array<Binding.AsObject>,
    body?: Expr.AsObject,
  }
}

export class Pure extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): Type | undefined;
  setType(value?: Type): void;

  hasExpr(): boolean;
  clearExpr(): void;
  getExpr(): Expr | undefined;
  setExpr(value?: Expr): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pure.AsObject;
  static toObject(includeInstance: boolean, msg: Pure): Pure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pure;
  static deserializeBinaryFromReader(message: Pure, reader: jspb.BinaryReader): Pure;
}

export namespace Pure {
  export type AsObject = {
    type?: Type.AsObject,
    expr?: Expr.AsObject,
  }
}

export class Update extends jspb.Message {
  hasPure(): boolean;
  clearPure(): void;
  getPure(): Pure | undefined;
  setPure(value?: Pure): void;

  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): Block | undefined;
  setBlock(value?: Block): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): Update.Create | undefined;
  setCreate(value?: Update.Create): void;

  hasExercise(): boolean;
  clearExercise(): void;
  getExercise(): Update.Exercise | undefined;
  setExercise(value?: Update.Exercise): void;

  hasFetch(): boolean;
  clearFetch(): void;
  getFetch(): Update.Fetch | undefined;
  setFetch(value?: Update.Fetch): void;

  hasGetTime(): boolean;
  clearGetTime(): void;
  getGetTime(): Unit | undefined;
  setGetTime(value?: Unit): void;

  hasLookupByKey(): boolean;
  clearLookupByKey(): void;
  getLookupByKey(): Update.RetrieveByKey | undefined;
  setLookupByKey(value?: Update.RetrieveByKey): void;

  hasFetchByKey(): boolean;
  clearFetchByKey(): void;
  getFetchByKey(): Update.RetrieveByKey | undefined;
  setFetchByKey(value?: Update.RetrieveByKey): void;

  hasEmbedExpr(): boolean;
  clearEmbedExpr(): void;
  getEmbedExpr(): Update.EmbedExpr | undefined;
  setEmbedExpr(value?: Update.EmbedExpr): void;

  getSumCase(): Update.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Update.AsObject;
  static toObject(includeInstance: boolean, msg: Update): Update.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Update, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Update;
  static deserializeBinaryFromReader(message: Update, reader: jspb.BinaryReader): Update;
}

export namespace Update {
  export type AsObject = {
    pure?: Pure.AsObject,
    block?: Block.AsObject,
    create?: Update.Create.AsObject,
    exercise?: Update.Exercise.AsObject,
    fetch?: Update.Fetch.AsObject,
    getTime?: Unit.AsObject,
    lookupByKey?: Update.RetrieveByKey.AsObject,
    fetchByKey?: Update.RetrieveByKey.AsObject,
    embedExpr?: Update.EmbedExpr.AsObject,
  }

  export class Create extends jspb.Message {
    hasTemplate(): boolean;
    clearTemplate(): void;
    getTemplate(): TypeConName | undefined;
    setTemplate(value?: TypeConName): void;

    hasExpr(): boolean;
    clearExpr(): void;
    getExpr(): Expr | undefined;
    setExpr(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Create.AsObject;
    static toObject(includeInstance: boolean, msg: Create): Create.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Create, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Create;
    static deserializeBinaryFromReader(message: Create, reader: jspb.BinaryReader): Create;
  }

  export namespace Create {
    export type AsObject = {
      template?: TypeConName.AsObject,
      expr?: Expr.AsObject,
    }
  }

  export class Exercise extends jspb.Message {
    hasTemplate(): boolean;
    clearTemplate(): void;
    getTemplate(): TypeConName | undefined;
    setTemplate(value?: TypeConName): void;

    getChoice(): string;
    setChoice(value: string): void;

    hasCid(): boolean;
    clearCid(): void;
    getCid(): Expr | undefined;
    setCid(value?: Expr): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): Expr | undefined;
    setActor(value?: Expr): void;

    hasArg(): boolean;
    clearArg(): void;
    getArg(): Expr | undefined;
    setArg(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Exercise.AsObject;
    static toObject(includeInstance: boolean, msg: Exercise): Exercise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Exercise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Exercise;
    static deserializeBinaryFromReader(message: Exercise, reader: jspb.BinaryReader): Exercise;
  }

  export namespace Exercise {
    export type AsObject = {
      template?: TypeConName.AsObject,
      choice: string,
      cid?: Expr.AsObject,
      actor?: Expr.AsObject,
      arg?: Expr.AsObject,
    }
  }

  export class Fetch extends jspb.Message {
    hasTemplate(): boolean;
    clearTemplate(): void;
    getTemplate(): TypeConName | undefined;
    setTemplate(value?: TypeConName): void;

    hasCid(): boolean;
    clearCid(): void;
    getCid(): Expr | undefined;
    setCid(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fetch.AsObject;
    static toObject(includeInstance: boolean, msg: Fetch): Fetch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fetch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fetch;
    static deserializeBinaryFromReader(message: Fetch, reader: jspb.BinaryReader): Fetch;
  }

  export namespace Fetch {
    export type AsObject = {
      template?: TypeConName.AsObject,
      cid?: Expr.AsObject,
    }
  }

  export class EmbedExpr extends jspb.Message {
    hasType(): boolean;
    clearType(): void;
    getType(): Type | undefined;
    setType(value?: Type): void;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Expr | undefined;
    setBody(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmbedExpr.AsObject;
    static toObject(includeInstance: boolean, msg: EmbedExpr): EmbedExpr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmbedExpr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmbedExpr;
    static deserializeBinaryFromReader(message: EmbedExpr, reader: jspb.BinaryReader): EmbedExpr;
  }

  export namespace EmbedExpr {
    export type AsObject = {
      type?: Type.AsObject,
      body?: Expr.AsObject,
    }
  }

  export class RetrieveByKey extends jspb.Message {
    hasTemplate(): boolean;
    clearTemplate(): void;
    getTemplate(): TypeConName | undefined;
    setTemplate(value?: TypeConName): void;

    hasKey(): boolean;
    clearKey(): void;
    getKey(): Expr | undefined;
    setKey(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetrieveByKey.AsObject;
    static toObject(includeInstance: boolean, msg: RetrieveByKey): RetrieveByKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetrieveByKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetrieveByKey;
    static deserializeBinaryFromReader(message: RetrieveByKey, reader: jspb.BinaryReader): RetrieveByKey;
  }

  export namespace RetrieveByKey {
    export type AsObject = {
      template?: TypeConName.AsObject,
      key?: Expr.AsObject,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    PURE = 1,
    BLOCK = 2,
    CREATE = 3,
    EXERCISE = 4,
    FETCH = 5,
    GET_TIME = 6,
    LOOKUP_BY_KEY = 8,
    FETCH_BY_KEY = 9,
    EMBED_EXPR = 7,
  }
}

export class Scenario extends jspb.Message {
  hasPure(): boolean;
  clearPure(): void;
  getPure(): Pure | undefined;
  setPure(value?: Pure): void;

  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): Block | undefined;
  setBlock(value?: Block): void;

  hasCommit(): boolean;
  clearCommit(): void;
  getCommit(): Scenario.Commit | undefined;
  setCommit(value?: Scenario.Commit): void;

  hasMustfailat(): boolean;
  clearMustfailat(): void;
  getMustfailat(): Scenario.Commit | undefined;
  setMustfailat(value?: Scenario.Commit): void;

  hasPass(): boolean;
  clearPass(): void;
  getPass(): Expr | undefined;
  setPass(value?: Expr): void;

  hasGetTime(): boolean;
  clearGetTime(): void;
  getGetTime(): Unit | undefined;
  setGetTime(value?: Unit): void;

  hasGetParty(): boolean;
  clearGetParty(): void;
  getGetParty(): Expr | undefined;
  setGetParty(value?: Expr): void;

  hasEmbedExpr(): boolean;
  clearEmbedExpr(): void;
  getEmbedExpr(): Scenario.EmbedExpr | undefined;
  setEmbedExpr(value?: Scenario.EmbedExpr): void;

  getSumCase(): Scenario.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scenario.AsObject;
  static toObject(includeInstance: boolean, msg: Scenario): Scenario.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Scenario, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scenario;
  static deserializeBinaryFromReader(message: Scenario, reader: jspb.BinaryReader): Scenario;
}

export namespace Scenario {
  export type AsObject = {
    pure?: Pure.AsObject,
    block?: Block.AsObject,
    commit?: Scenario.Commit.AsObject,
    mustfailat?: Scenario.Commit.AsObject,
    pass?: Expr.AsObject,
    getTime?: Unit.AsObject,
    getParty?: Expr.AsObject,
    embedExpr?: Scenario.EmbedExpr.AsObject,
  }

  export class Commit extends jspb.Message {
    hasParty(): boolean;
    clearParty(): void;
    getParty(): Expr | undefined;
    setParty(value?: Expr): void;

    hasExpr(): boolean;
    clearExpr(): void;
    getExpr(): Expr | undefined;
    setExpr(value?: Expr): void;

    hasRetType(): boolean;
    clearRetType(): void;
    getRetType(): Type | undefined;
    setRetType(value?: Type): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Commit.AsObject;
    static toObject(includeInstance: boolean, msg: Commit): Commit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Commit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Commit;
    static deserializeBinaryFromReader(message: Commit, reader: jspb.BinaryReader): Commit;
  }

  export namespace Commit {
    export type AsObject = {
      party?: Expr.AsObject,
      expr?: Expr.AsObject,
      retType?: Type.AsObject,
    }
  }

  export class EmbedExpr extends jspb.Message {
    hasType(): boolean;
    clearType(): void;
    getType(): Type | undefined;
    setType(value?: Type): void;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Expr | undefined;
    setBody(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmbedExpr.AsObject;
    static toObject(includeInstance: boolean, msg: EmbedExpr): EmbedExpr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmbedExpr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmbedExpr;
    static deserializeBinaryFromReader(message: EmbedExpr, reader: jspb.BinaryReader): EmbedExpr;
  }

  export namespace EmbedExpr {
    export type AsObject = {
      type?: Type.AsObject,
      body?: Expr.AsObject,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    PURE = 1,
    BLOCK = 2,
    COMMIT = 3,
    MUSTFAILAT = 4,
    PASS = 5,
    GET_TIME = 6,
    GET_PARTY = 7,
    EMBED_EXPR = 8,
  }
}

export class TemplateChoice extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getConsuming(): boolean;
  setConsuming(value: boolean): void;

  hasControllers(): boolean;
  clearControllers(): void;
  getControllers(): Expr | undefined;
  setControllers(value?: Expr): void;

  hasArgBinder(): boolean;
  clearArgBinder(): void;
  getArgBinder(): VarWithType | undefined;
  setArgBinder(value?: VarWithType): void;

  hasRetType(): boolean;
  clearRetType(): void;
  getRetType(): Type | undefined;
  setRetType(value?: Type): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): Expr | undefined;
  setUpdate(value?: Expr): void;

  getSelfBinder(): string;
  setSelfBinder(value: string): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateChoice.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateChoice): TemplateChoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateChoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateChoice;
  static deserializeBinaryFromReader(message: TemplateChoice, reader: jspb.BinaryReader): TemplateChoice;
}

export namespace TemplateChoice {
  export type AsObject = {
    name: string,
    consuming: boolean,
    controllers?: Expr.AsObject,
    argBinder?: VarWithType.AsObject,
    retType?: Type.AsObject,
    update?: Expr.AsObject,
    selfBinder: string,
    location?: Location.AsObject,
  }
}

export class KeyExpr extends jspb.Message {
  hasProjections(): boolean;
  clearProjections(): void;
  getProjections(): KeyExpr.Projections | undefined;
  setProjections(value?: KeyExpr.Projections): void;

  hasRecord(): boolean;
  clearRecord(): void;
  getRecord(): KeyExpr.Record | undefined;
  setRecord(value?: KeyExpr.Record): void;

  getSumCase(): KeyExpr.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyExpr.AsObject;
  static toObject(includeInstance: boolean, msg: KeyExpr): KeyExpr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyExpr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyExpr;
  static deserializeBinaryFromReader(message: KeyExpr, reader: jspb.BinaryReader): KeyExpr;
}

export namespace KeyExpr {
  export type AsObject = {
    projections?: KeyExpr.Projections.AsObject,
    record?: KeyExpr.Record.AsObject,
  }

  export class Projection extends jspb.Message {
    hasTycon(): boolean;
    clearTycon(): void;
    getTycon(): Type.Con | undefined;
    setTycon(value?: Type.Con): void;

    getField(): string;
    setField(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Projection.AsObject;
    static toObject(includeInstance: boolean, msg: Projection): Projection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Projection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Projection;
    static deserializeBinaryFromReader(message: Projection, reader: jspb.BinaryReader): Projection;
  }

  export namespace Projection {
    export type AsObject = {
      tycon?: Type.Con.AsObject,
      field: string,
    }
  }

  export class Projections extends jspb.Message {
    clearProjectionsList(): void;
    getProjectionsList(): Array<KeyExpr.Projection>;
    setProjectionsList(value: Array<KeyExpr.Projection>): void;
    addProjections(value?: KeyExpr.Projection, index?: number): KeyExpr.Projection;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Projections.AsObject;
    static toObject(includeInstance: boolean, msg: Projections): Projections.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Projections, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Projections;
    static deserializeBinaryFromReader(message: Projections, reader: jspb.BinaryReader): Projections;
  }

  export namespace Projections {
    export type AsObject = {
      projectionsList: Array<KeyExpr.Projection.AsObject>,
    }
  }

  export class RecordField extends jspb.Message {
    getField(): string;
    setField(value: string): void;

    hasExpr(): boolean;
    clearExpr(): void;
    getExpr(): KeyExpr | undefined;
    setExpr(value?: KeyExpr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordField.AsObject;
    static toObject(includeInstance: boolean, msg: RecordField): RecordField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordField;
    static deserializeBinaryFromReader(message: RecordField, reader: jspb.BinaryReader): RecordField;
  }

  export namespace RecordField {
    export type AsObject = {
      field: string,
      expr?: KeyExpr.AsObject,
    }
  }

  export class Record extends jspb.Message {
    hasTycon(): boolean;
    clearTycon(): void;
    getTycon(): Type.Con | undefined;
    setTycon(value?: Type.Con): void;

    clearFieldsList(): void;
    getFieldsList(): Array<KeyExpr.RecordField>;
    setFieldsList(value: Array<KeyExpr.RecordField>): void;
    addFields(value?: KeyExpr.RecordField, index?: number): KeyExpr.RecordField;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Record.AsObject;
    static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Record;
    static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
  }

  export namespace Record {
    export type AsObject = {
      tycon?: Type.Con.AsObject,
      fieldsList: Array<KeyExpr.RecordField.AsObject>,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    PROJECTIONS = 1,
    RECORD = 2,
  }
}

export class DefTemplate extends jspb.Message {
  hasTycon(): boolean;
  clearTycon(): void;
  getTycon(): DottedName | undefined;
  setTycon(value?: DottedName): void;

  getParam(): string;
  setParam(value: string): void;

  hasPrecond(): boolean;
  clearPrecond(): void;
  getPrecond(): Expr | undefined;
  setPrecond(value?: Expr): void;

  hasSignatories(): boolean;
  clearSignatories(): void;
  getSignatories(): Expr | undefined;
  setSignatories(value?: Expr): void;

  hasAgreement(): boolean;
  clearAgreement(): void;
  getAgreement(): Expr | undefined;
  setAgreement(value?: Expr): void;

  clearChoicesList(): void;
  getChoicesList(): Array<TemplateChoice>;
  setChoicesList(value: Array<TemplateChoice>): void;
  addChoices(value?: TemplateChoice, index?: number): TemplateChoice;

  hasObservers(): boolean;
  clearObservers(): void;
  getObservers(): Expr | undefined;
  setObservers(value?: Expr): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): DefTemplate.DefKey | undefined;
  setKey(value?: DefTemplate.DefKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: DefTemplate): DefTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefTemplate;
  static deserializeBinaryFromReader(message: DefTemplate, reader: jspb.BinaryReader): DefTemplate;
}

export namespace DefTemplate {
  export type AsObject = {
    tycon?: DottedName.AsObject,
    param: string,
    precond?: Expr.AsObject,
    signatories?: Expr.AsObject,
    agreement?: Expr.AsObject,
    choicesList: Array<TemplateChoice.AsObject>,
    observers?: Expr.AsObject,
    location?: Location.AsObject,
    key?: DefTemplate.DefKey.AsObject,
  }

  export class DefKey extends jspb.Message {
    hasType(): boolean;
    clearType(): void;
    getType(): Type | undefined;
    setType(value?: Type): void;

    hasKey(): boolean;
    clearKey(): void;
    getKey(): KeyExpr | undefined;
    setKey(value?: KeyExpr): void;

    hasMaintainers(): boolean;
    clearMaintainers(): void;
    getMaintainers(): Expr | undefined;
    setMaintainers(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefKey.AsObject;
    static toObject(includeInstance: boolean, msg: DefKey): DefKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefKey;
    static deserializeBinaryFromReader(message: DefKey, reader: jspb.BinaryReader): DefKey;
  }

  export namespace DefKey {
    export type AsObject = {
      type?: Type.AsObject,
      key?: KeyExpr.AsObject,
      maintainers?: Expr.AsObject,
    }
  }
}

export class DefDataType extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): DottedName | undefined;
  setName(value?: DottedName): void;

  clearParamsList(): void;
  getParamsList(): Array<TypeVarWithKind>;
  setParamsList(value: Array<TypeVarWithKind>): void;
  addParams(value?: TypeVarWithKind, index?: number): TypeVarWithKind;

  hasRecord(): boolean;
  clearRecord(): void;
  getRecord(): DefDataType.Fields | undefined;
  setRecord(value?: DefDataType.Fields): void;

  hasVariant(): boolean;
  clearVariant(): void;
  getVariant(): DefDataType.Fields | undefined;
  setVariant(value?: DefDataType.Fields): void;

  getSerializable(): boolean;
  setSerializable(value: boolean): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  getDataconsCase(): DefDataType.DataconsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefDataType.AsObject;
  static toObject(includeInstance: boolean, msg: DefDataType): DefDataType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefDataType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefDataType;
  static deserializeBinaryFromReader(message: DefDataType, reader: jspb.BinaryReader): DefDataType;
}

export namespace DefDataType {
  export type AsObject = {
    name?: DottedName.AsObject,
    paramsList: Array<TypeVarWithKind.AsObject>,
    record?: DefDataType.Fields.AsObject,
    variant?: DefDataType.Fields.AsObject,
    serializable: boolean,
    location?: Location.AsObject,
  }

  export class Fields extends jspb.Message {
    clearFieldsList(): void;
    getFieldsList(): Array<FieldWithType>;
    setFieldsList(value: Array<FieldWithType>): void;
    addFields(value?: FieldWithType, index?: number): FieldWithType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fields.AsObject;
    static toObject(includeInstance: boolean, msg: Fields): Fields.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fields, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fields;
    static deserializeBinaryFromReader(message: Fields, reader: jspb.BinaryReader): Fields;
  }

  export namespace Fields {
    export type AsObject = {
      fieldsList: Array<FieldWithType.AsObject>,
    }
  }

  export enum DataconsCase {
    DATACONS_NOT_SET = 0,
    RECORD = 3,
    VARIANT = 4,
  }
}

export class DefValue extends jspb.Message {
  hasNameWithType(): boolean;
  clearNameWithType(): void;
  getNameWithType(): DefValue.NameWithType | undefined;
  setNameWithType(value?: DefValue.NameWithType): void;

  hasExpr(): boolean;
  clearExpr(): void;
  getExpr(): Expr | undefined;
  setExpr(value?: Expr): void;

  getNoPartyLiterals(): boolean;
  setNoPartyLiterals(value: boolean): void;

  getIsTest(): boolean;
  setIsTest(value: boolean): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefValue.AsObject;
  static toObject(includeInstance: boolean, msg: DefValue): DefValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefValue;
  static deserializeBinaryFromReader(message: DefValue, reader: jspb.BinaryReader): DefValue;
}

export namespace DefValue {
  export type AsObject = {
    nameWithType?: DefValue.NameWithType.AsObject,
    expr?: Expr.AsObject,
    noPartyLiterals: boolean,
    isTest: boolean,
    location?: Location.AsObject,
  }

  export class NameWithType extends jspb.Message {
    clearNameList(): void;
    getNameList(): Array<string>;
    setNameList(value: Array<string>): void;
    addName(value: string, index?: number): string;

    hasType(): boolean;
    clearType(): void;
    getType(): Type | undefined;
    setType(value?: Type): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NameWithType.AsObject;
    static toObject(includeInstance: boolean, msg: NameWithType): NameWithType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NameWithType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NameWithType;
    static deserializeBinaryFromReader(message: NameWithType, reader: jspb.BinaryReader): NameWithType;
  }

  export namespace NameWithType {
    export type AsObject = {
      nameList: Array<string>,
      type?: Type.AsObject,
    }
  }
}

export class FeatureFlags extends jspb.Message {
  getForbidpartyliterals(): boolean;
  setForbidpartyliterals(value: boolean): void;

  getDontdivulgecontractidsincreatearguments(): boolean;
  setDontdivulgecontractidsincreatearguments(value: boolean): void;

  getDontdisclosenonconsumingchoicestoobservers(): boolean;
  setDontdisclosenonconsumingchoicestoobservers(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureFlags.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureFlags): FeatureFlags.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeatureFlags, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureFlags;
  static deserializeBinaryFromReader(message: FeatureFlags, reader: jspb.BinaryReader): FeatureFlags;
}

export namespace FeatureFlags {
  export type AsObject = {
    forbidpartyliterals: boolean,
    dontdivulgecontractidsincreatearguments: boolean,
    dontdisclosenonconsumingchoicestoobservers: boolean,
  }
}

export class Module extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): DottedName | undefined;
  setName(value?: DottedName): void;

  hasFlags(): boolean;
  clearFlags(): void;
  getFlags(): FeatureFlags | undefined;
  setFlags(value?: FeatureFlags): void;

  clearDataTypesList(): void;
  getDataTypesList(): Array<DefDataType>;
  setDataTypesList(value: Array<DefDataType>): void;
  addDataTypes(value?: DefDataType, index?: number): DefDataType;

  clearValuesList(): void;
  getValuesList(): Array<DefValue>;
  setValuesList(value: Array<DefValue>): void;
  addValues(value?: DefValue, index?: number): DefValue;

  clearTemplatesList(): void;
  getTemplatesList(): Array<DefTemplate>;
  setTemplatesList(value: Array<DefTemplate>): void;
  addTemplates(value?: DefTemplate, index?: number): DefTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    name?: DottedName.AsObject,
    flags?: FeatureFlags.AsObject,
    dataTypesList: Array<DefDataType.AsObject>,
    valuesList: Array<DefValue.AsObject>,
    templatesList: Array<DefTemplate.AsObject>,
  }
}

export class Package extends jspb.Message {
  clearModulesList(): void;
  getModulesList(): Array<Module>;
  setModulesList(value: Array<Module>): void;
  addModules(value?: Module, index?: number): Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Package.AsObject;
  static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Package;
  static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
}

export namespace Package {
  export type AsObject = {
    modulesList: Array<Module.AsObject>,
  }
}

export enum PrimType {
  UNIT = 0,
  BOOL = 1,
  INT64 = 2,
  DECIMAL = 3,
  TEXT = 5,
  TIMESTAMP = 6,
  PARTY = 8,
  LIST = 9,
  UPDATE = 10,
  SCENARIO = 11,
  DATE = 12,
  CONTRACT_ID = 13,
  OPTIONAL = 14,
  ARROW = 15,
  MAP = 16,
}

export enum PrimCon {
  CON_UNIT = 0,
  CON_FALSE = 1,
  CON_TRUE = 2,
}

export enum BuiltinFunction {
  ADD_DECIMAL = 0,
  SUB_DECIMAL = 1,
  MUL_DECIMAL = 2,
  DIV_DECIMAL = 3,
  ROUND_DECIMAL = 6,
  ADD_INT64 = 7,
  SUB_INT64 = 8,
  MUL_INT64 = 9,
  DIV_INT64 = 10,
  MOD_INT64 = 11,
  EXP_INT64 = 12,
  FOLDL = 20,
  FOLDR = 21,
  MAP_EMPTY = 96,
  MAP_INSERT = 97,
  MAP_LOOKUP = 98,
  MAP_DELETE = 99,
  MAP_TO_LIST = 100,
  MAP_SIZE = 101,
  EXPLODE_TEXT = 23,
  APPEND_TEXT = 24,
  ERROR = 25,
  LEQ_INT64 = 33,
  LEQ_DECIMAL = 34,
  LEQ_TEXT = 36,
  LEQ_TIMESTAMP = 37,
  LEQ_DATE = 67,
  LEQ_PARTY = 89,
  LESS_INT64 = 39,
  LESS_DECIMAL = 40,
  LESS_TEXT = 42,
  LESS_TIMESTAMP = 43,
  LESS_DATE = 68,
  LESS_PARTY = 90,
  GEQ_INT64 = 45,
  GEQ_DECIMAL = 46,
  GEQ_TEXT = 48,
  GEQ_TIMESTAMP = 49,
  GEQ_DATE = 69,
  GEQ_PARTY = 91,
  GREATER_INT64 = 51,
  GREATER_DECIMAL = 52,
  GREATER_TEXT = 54,
  GREATER_TIMESTAMP = 55,
  GREATER_DATE = 70,
  GREATER_PARTY = 92,
  TO_TEXT_INT64 = 57,
  TO_TEXT_DECIMAL = 58,
  TO_TEXT_TEXT = 60,
  TO_TEXT_TIMESTAMP = 61,
  TO_TEXT_DATE = 71,
  TO_QUOTED_TEXT_PARTY = 63,
  TO_TEXT_PARTY = 94,
  FROM_TEXT_PARTY = 95,
  SHA256_TEXT = 93,
  DATE_TO_UNIX_DAYS = 72,
  UNIX_DAYS_TO_DATE = 73,
  TIMESTAMP_TO_UNIX_MICROSECONDS = 74,
  UNIX_MICROSECONDS_TO_TIMESTAMP = 75,
  INT64_TO_DECIMAL = 76,
  DECIMAL_TO_INT64 = 77,
  IMPLODE_TEXT = 78,
  EQUAL_INT64 = 79,
  EQUAL_DECIMAL = 80,
  EQUAL_TEXT = 81,
  EQUAL_TIMESTAMP = 82,
  EQUAL_DATE = 83,
  EQUAL_PARTY = 84,
  EQUAL_BOOL = 85,
  EQUAL_CONTRACT_ID = 86,
  EQUAL_LIST = 87,
  TRACE = 88,
}

