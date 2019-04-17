// package: daml_lf_0
// file: com/digitalasset/daml_lf/daml_lf_0.proto

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

export class Package extends jspb.Message {
  hasLibrary(): boolean;
  clearLibrary(): void;
  getLibrary(): Library | undefined;
  setLibrary(value?: Library): void;

  hasStakeholders(): boolean;
  clearStakeholders(): void;
  getStakeholders(): TemplateStoreStakeholders | undefined;
  setStakeholders(value?: TemplateStoreStakeholders): void;

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
    library?: Library.AsObject,
    stakeholders?: TemplateStoreStakeholders.AsObject,
  }
}

export class Library extends jspb.Message {
  clearTemplateStoreList(): void;
  getTemplateStoreList(): Array<TemplateGroup>;
  setTemplateStoreList(value: Array<TemplateGroup>): void;
  addTemplateStore(value?: TemplateGroup, index?: number): TemplateGroup;

  clearDeclStoreList(): void;
  getDeclStoreList(): Array<Decl>;
  setDeclStoreList(value: Array<Decl>): void;
  addDeclStore(value?: Decl, index?: number): Decl;

  clearModuleTemplateGroupIdsList(): void;
  getModuleTemplateGroupIdsList(): Array<string>;
  setModuleTemplateGroupIdsList(value: Array<string>): void;
  addModuleTemplateGroupIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Library.AsObject;
  static toObject(includeInstance: boolean, msg: Library): Library.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Library, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Library;
  static deserializeBinaryFromReader(message: Library, reader: jspb.BinaryReader): Library;
}

export namespace Library {
  export type AsObject = {
    templateStoreList: Array<TemplateGroup.AsObject>,
    declStoreList: Array<Decl.AsObject>,
    moduleTemplateGroupIdsList: Array<string>,
  }
}

export class TemplateGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearTemplatesList(): void;
  getTemplatesList(): Array<Template>;
  setTemplatesList(value: Array<Template>): void;
  addTemplates(value?: Template, index?: number): Template;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateGroup.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateGroup): TemplateGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateGroup;
  static deserializeBinaryFromReader(message: TemplateGroup, reader: jspb.BinaryReader): TemplateGroup;
}

export namespace TemplateGroup {
  export type AsObject = {
    id: string,
    templatesList: Array<Template.AsObject>,
  }
}

export class Template extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearLetsList(): void;
  getLetsList(): Array<LetBinder>;
  setLetsList(value: Array<LetBinder>): void;
  addLets(value?: LetBinder, index?: number): LetBinder;

  clearParamsList(): void;
  getParamsList(): Array<TypedBinder>;
  setParamsList(value: Array<TypedBinder>): void;
  addParams(value?: TypedBinder, index?: number): TypedBinder;

  hasContractExpr(): boolean;
  clearContractExpr(): void;
  getContractExpr(): ContractExpr | undefined;
  setContractExpr(value?: ContractExpr): void;

  getTopleveldef(): string;
  setTopleveldef(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Template.AsObject;
  static toObject(includeInstance: boolean, msg: Template): Template.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Template, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Template;
  static deserializeBinaryFromReader(message: Template, reader: jspb.BinaryReader): Template;
}

export namespace Template {
  export type AsObject = {
    id: string,
    letsList: Array<LetBinder.AsObject>,
    paramsList: Array<TypedBinder.AsObject>,
    contractExpr?: ContractExpr.AsObject,
    topleveldef: string,
  }
}

export class LetBinder extends jspb.Message {
  getVar(): string;
  setVar(value: string): void;

  hasExpr(): boolean;
  clearExpr(): void;
  getExpr(): Expr | undefined;
  setExpr(value?: Expr): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LetBinder.AsObject;
  static toObject(includeInstance: boolean, msg: LetBinder): LetBinder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LetBinder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LetBinder;
  static deserializeBinaryFromReader(message: LetBinder, reader: jspb.BinaryReader): LetBinder;
}

export namespace LetBinder {
  export type AsObject = {
    pb_var: string,
    expr?: Expr.AsObject,
  }
}

export class Expr extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): RefTerm | undefined;
  setRef(value?: RefTerm): void;

  hasLit(): boolean;
  clearLit(): void;
  getLit(): Literal | undefined;
  setLit(value?: Literal): void;

  hasApp(): boolean;
  clearApp(): void;
  getApp(): Expr.App | undefined;
  setApp(value?: Expr.App): void;

  hasLam(): boolean;
  clearLam(): void;
  getLam(): Expr.Lambda | undefined;
  setLam(value?: Expr.Lambda): void;

  hasLet(): boolean;
  clearLet(): void;
  getLet(): Expr.Let | undefined;
  setLet(value?: Expr.Let): void;

  hasIf(): boolean;
  clearIf(): void;
  getIf(): Expr.If | undefined;
  setIf(value?: Expr.If): void;

  hasCase(): boolean;
  clearCase(): void;
  getCase(): Case | undefined;
  setCase(value?: Case): void;

  hasChoice(): boolean;
  clearChoice(): void;
  getChoice(): Choice | undefined;
  setChoice(value?: Choice): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): Update | undefined;
  setUpdate(value?: Update): void;

  hasPatternMatch(): boolean;
  clearPatternMatch(): void;
  getPatternMatch(): PatternMatch | undefined;
  setPatternMatch(value?: PatternMatch): void;

  hasScenario(): boolean;
  clearScenario(): void;
  getScenario(): Scenario | undefined;
  setScenario(value?: Scenario): void;

  hasExtend(): boolean;
  clearExtend(): void;
  getExtend(): Expr.Extend | undefined;
  setExtend(value?: Expr.Extend): void;

  hasList(): boolean;
  clearList(): void;
  getList(): Expr.List | undefined;
  setList(value?: Expr.List): void;

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
    ref?: RefTerm.AsObject,
    lit?: Literal.AsObject,
    app?: Expr.App.AsObject,
    lam?: Expr.Lambda.AsObject,
    let?: Expr.Let.AsObject,
    pb_if?: Expr.If.AsObject,
    pb_case?: Case.AsObject,
    choice?: Choice.AsObject,
    update?: Update.AsObject,
    patternMatch?: PatternMatch.AsObject,
    scenario?: Scenario.AsObject,
    extend?: Expr.Extend.AsObject,
    list?: Expr.List.AsObject,
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

  export class Lambda extends jspb.Message {
    clearParamsList(): void;
    getParamsList(): Array<TypedBinder>;
    setParamsList(value: Array<TypedBinder>): void;
    addParams(value?: TypedBinder, index?: number): TypedBinder;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Expr | undefined;
    setBody(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Lambda.AsObject;
    static toObject(includeInstance: boolean, msg: Lambda): Lambda.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Lambda, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Lambda;
    static deserializeBinaryFromReader(message: Lambda, reader: jspb.BinaryReader): Lambda;
  }

  export namespace Lambda {
    export type AsObject = {
      paramsList: Array<TypedBinder.AsObject>,
      body?: Expr.AsObject,
    }
  }

  export class Let extends jspb.Message {
    clearBindingsList(): void;
    getBindingsList(): Array<LetBinder>;
    setBindingsList(value: Array<LetBinder>): void;
    addBindings(value?: LetBinder, index?: number): LetBinder;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Expr | undefined;
    setBody(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Let.AsObject;
    static toObject(includeInstance: boolean, msg: Let): Let.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Let, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Let;
    static deserializeBinaryFromReader(message: Let, reader: jspb.BinaryReader): Let;
  }

  export namespace Let {
    export type AsObject = {
      bindingsList: Array<LetBinder.AsObject>,
      body?: Expr.AsObject,
    }
  }

  export class If extends jspb.Message {
    hasCond(): boolean;
    clearCond(): void;
    getCond(): Expr | undefined;
    setCond(value?: Expr): void;

    hasThen(): boolean;
    clearThen(): void;
    getThen(): Expr | undefined;
    setThen(value?: Expr): void;

    hasElse(): boolean;
    clearElse(): void;
    getElse(): Expr | undefined;
    setElse(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): If.AsObject;
    static toObject(includeInstance: boolean, msg: If): If.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: If, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): If;
    static deserializeBinaryFromReader(message: If, reader: jspb.BinaryReader): If;
  }

  export namespace If {
    export type AsObject = {
      cond?: Expr.AsObject,
      then?: Expr.AsObject,
      pb_else?: Expr.AsObject,
    }
  }

  export class ExtendField extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    hasExpr(): boolean;
    clearExpr(): void;
    getExpr(): Expr | undefined;
    setExpr(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtendField.AsObject;
    static toObject(includeInstance: boolean, msg: ExtendField): ExtendField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtendField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtendField;
    static deserializeBinaryFromReader(message: ExtendField, reader: jspb.BinaryReader): ExtendField;
  }

  export namespace ExtendField {
    export type AsObject = {
      name: string,
      expr?: Expr.AsObject,
    }
  }

  export class Extend extends jspb.Message {
    clearFieldsList(): void;
    getFieldsList(): Array<Expr.ExtendField>;
    setFieldsList(value: Array<Expr.ExtendField>): void;
    addFields(value?: Expr.ExtendField, index?: number): Expr.ExtendField;

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): Expr | undefined;
    setRecord(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Extend.AsObject;
    static toObject(includeInstance: boolean, msg: Extend): Extend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Extend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Extend;
    static deserializeBinaryFromReader(message: Extend, reader: jspb.BinaryReader): Extend;
  }

  export namespace Extend {
    export type AsObject = {
      fieldsList: Array<Expr.ExtendField.AsObject>,
      record?: Expr.AsObject,
    }
  }

  export class List extends jspb.Message {
    clearHeadsList(): void;
    getHeadsList(): Array<Expr>;
    setHeadsList(value: Array<Expr>): void;
    addHeads(value?: Expr, index?: number): Expr;

    hasTail(): boolean;
    clearTail(): void;
    getTail(): Expr | undefined;
    setTail(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): List.AsObject;
    static toObject(includeInstance: boolean, msg: List): List.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): List;
    static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
  }

  export namespace List {
    export type AsObject = {
      headsList: Array<Expr.AsObject>,
      tail?: Expr.AsObject,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    REF = 1,
    LIT = 2,
    APP = 3,
    LAM = 4,
    LET = 5,
    IF = 6,
    CASE = 7,
    CHOICE = 8,
    UPDATE = 9,
    PATTERN_MATCH = 10,
    SCENARIO = 11,
    EXTEND = 12,
    LIST = 13,
  }
}

export class Choice extends jspb.Message {
  getKind(): ChoiceKind;
  setKind(value: ChoiceKind): void;

  hasController(): boolean;
  clearController(): void;
  getController(): Expr | undefined;
  setController(value?: Expr): void;

  clearValuesList(): void;
  getValuesList(): Array<TypedBinder>;
  setValuesList(value: Array<TypedBinder>): void;
  addValues(value?: TypedBinder, index?: number): TypedBinder;

  getExercisedAt(): string;
  setExercisedAt(value: string): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): Expr | undefined;
  setAfter(value?: Expr): void;

  hasUntil(): boolean;
  clearUntil(): void;
  getUntil(): Expr | undefined;
  setUntil(value?: Expr): void;

  hasCond(): boolean;
  clearCond(): void;
  getCond(): Expr | undefined;
  setCond(value?: Expr): void;

  hasFollowUp(): boolean;
  clearFollowUp(): void;
  getFollowUp(): Expr | undefined;
  setFollowUp(value?: Expr): void;

  hasResultTy(): boolean;
  clearResultTy(): void;
  getResultTy(): Type | undefined;
  setResultTy(value?: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Choice.AsObject;
  static toObject(includeInstance: boolean, msg: Choice): Choice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Choice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Choice;
  static deserializeBinaryFromReader(message: Choice, reader: jspb.BinaryReader): Choice;
}

export namespace Choice {
  export type AsObject = {
    kind: ChoiceKind,
    controller?: Expr.AsObject,
    valuesList: Array<TypedBinder.AsObject>,
    exercisedAt: string,
    after?: Expr.AsObject,
    until?: Expr.AsObject,
    cond?: Expr.AsObject,
    followUp?: Expr.AsObject,
    resultTy?: Type.AsObject,
  }
}

export class CasePat extends jspb.Message {
  hasDefault(): boolean;
  clearDefault(): void;
  getDefault(): Unit | undefined;
  setDefault(value?: Unit): void;

  hasVariant(): boolean;
  clearVariant(): void;
  getVariant(): CasePat.Variant | undefined;
  setVariant(value?: CasePat.Variant): void;

  hasLiteral(): boolean;
  clearLiteral(): void;
  getLiteral(): Literal | undefined;
  setLiteral(value?: Literal): void;

  hasData(): boolean;
  clearData(): void;
  getData(): CasePat.Data | undefined;
  setData(value?: CasePat.Data): void;

  getSumCase(): CasePat.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CasePat.AsObject;
  static toObject(includeInstance: boolean, msg: CasePat): CasePat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CasePat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CasePat;
  static deserializeBinaryFromReader(message: CasePat, reader: jspb.BinaryReader): CasePat;
}

export namespace CasePat {
  export type AsObject = {
    pb_default?: Unit.AsObject,
    variant?: CasePat.Variant.AsObject,
    literal?: Literal.AsObject,
    data?: CasePat.Data.AsObject,
  }

  export class Variant extends jspb.Message {
    getLabel(): string;
    setLabel(value: string): void;

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
      label: string,
      binder: string,
    }
  }

  export class Data extends jspb.Message {
    getConstructor(): Builtin;
    setConstructor(value: Builtin): void;

    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): void;
    addArgs(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      constructor: Builtin,
      argsList: Array<string>,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    DEFAULT = 1,
    VARIANT = 2,
    LITERAL = 3,
    DATA = 4,
  }
}

export class Case extends jspb.Message {
  hasScrut(): boolean;
  clearScrut(): void;
  getScrut(): Expr | undefined;
  setScrut(value?: Expr): void;

  clearAltsList(): void;
  getAltsList(): Array<Case.Alt>;
  setAltsList(value: Array<Case.Alt>): void;
  addAlts(value?: Case.Alt, index?: number): Case.Alt;

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
    altsList: Array<Case.Alt.AsObject>,
  }

  export class Alt extends jspb.Message {
    hasPat(): boolean;
    clearPat(): void;
    getPat(): CasePat | undefined;
    setPat(value?: CasePat): void;

    hasExpr(): boolean;
    clearExpr(): void;
    getExpr(): Expr | undefined;
    setExpr(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Alt.AsObject;
    static toObject(includeInstance: boolean, msg: Alt): Alt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Alt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Alt;
    static deserializeBinaryFromReader(message: Alt, reader: jspb.BinaryReader): Alt;
  }

  export namespace Alt {
    export type AsObject = {
      pat?: CasePat.AsObject,
      expr?: Expr.AsObject,
    }
  }
}

export class Literal extends jspb.Message {
  hasBool(): boolean;
  clearBool(): void;
  getBool(): boolean;
  setBool(value: boolean): void;

  hasInteger(): boolean;
  clearInteger(): void;
  getInteger(): string;
  setInteger(value: string): void;

  hasDecimal(): boolean;
  clearDecimal(): void;
  getDecimal(): string;
  setDecimal(value: string): void;

  hasRelTime(): boolean;
  clearRelTime(): void;
  getRelTime(): string;
  setRelTime(value: string): void;

  hasChar(): boolean;
  clearChar(): void;
  getChar(): string;
  setChar(value: string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): string;
  setTime(value: string): void;

  hasParty(): boolean;
  clearParty(): void;
  getParty(): string;
  setParty(value: string): void;

  hasContractId(): boolean;
  clearContractId(): void;
  getContractId(): ContractId | undefined;
  setContractId(value?: ContractId): void;

  hasEmptyRecord(): boolean;
  clearEmptyRecord(): void;
  getEmptyRecord(): Unit | undefined;
  setEmptyRecord(value?: Unit): void;

  hasUnit(): boolean;
  clearUnit(): void;
  getUnit(): Unit | undefined;
  setUnit(value?: Unit): void;

  getSumCase(): Literal.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Literal.AsObject;
  static toObject(includeInstance: boolean, msg: Literal): Literal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Literal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Literal;
  static deserializeBinaryFromReader(message: Literal, reader: jspb.BinaryReader): Literal;
}

export namespace Literal {
  export type AsObject = {
    bool: boolean,
    integer: string,
    decimal: string,
    relTime: string,
    pb_char: string,
    text: string,
    time: string,
    party: string,
    contractId?: ContractId.AsObject,
    emptyRecord?: Unit.AsObject,
    unit?: Unit.AsObject,
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    BOOL = 1,
    INTEGER = 2,
    DECIMAL = 3,
    REL_TIME = 4,
    CHAR = 5,
    TEXT = 6,
    TIME = 10,
    PARTY = 7,
    CONTRACT_ID = 8,
    EMPTY_RECORD = 9,
    UNIT = 11,
  }
}

export class ContractId extends jspb.Message {
  hasAbsolute(): boolean;
  clearAbsolute(): void;
  getAbsolute(): string;
  setAbsolute(value: string): void;

  hasRelative(): boolean;
  clearRelative(): void;
  getRelative(): number;
  setRelative(value: number): void;

  getSumCase(): ContractId.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractId.AsObject;
  static toObject(includeInstance: boolean, msg: ContractId): ContractId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractId;
  static deserializeBinaryFromReader(message: ContractId, reader: jspb.BinaryReader): ContractId;
}

export namespace ContractId {
  export type AsObject = {
    absolute: string,
    relative: number,
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    ABSOLUTE = 1,
    RELATIVE = 2,
  }
}

export class RecordPattern extends jspb.Message {
  hasVar(): boolean;
  clearVar(): void;
  getVar(): string;
  setVar(value: string): void;

  hasRecord(): boolean;
  clearRecord(): void;
  getRecord(): RecordPattern.Record | undefined;
  setRecord(value?: RecordPattern.Record): void;

  getSumCase(): RecordPattern.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordPattern.AsObject;
  static toObject(includeInstance: boolean, msg: RecordPattern): RecordPattern.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordPattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordPattern;
  static deserializeBinaryFromReader(message: RecordPattern, reader: jspb.BinaryReader): RecordPattern;
}

export namespace RecordPattern {
  export type AsObject = {
    pb_var: string,
    record?: RecordPattern.Record.AsObject,
  }

  export class LabelWithPattern extends jspb.Message {
    getLabel(): string;
    setLabel(value: string): void;

    hasPattern(): boolean;
    clearPattern(): void;
    getPattern(): RecordPattern | undefined;
    setPattern(value?: RecordPattern): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LabelWithPattern.AsObject;
    static toObject(includeInstance: boolean, msg: LabelWithPattern): LabelWithPattern.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LabelWithPattern, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LabelWithPattern;
    static deserializeBinaryFromReader(message: LabelWithPattern, reader: jspb.BinaryReader): LabelWithPattern;
  }

  export namespace LabelWithPattern {
    export type AsObject = {
      label: string,
      pattern?: RecordPattern.AsObject,
    }
  }

  export class Record extends jspb.Message {
    clearPatsList(): void;
    getPatsList(): Array<RecordPattern.LabelWithPattern>;
    setPatsList(value: Array<RecordPattern.LabelWithPattern>): void;
    addPats(value?: RecordPattern.LabelWithPattern, index?: number): RecordPattern.LabelWithPattern;

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
      patsList: Array<RecordPattern.LabelWithPattern.AsObject>,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    VAR = 1,
    RECORD = 2,
  }
}

export class Update extends jspb.Message {
  clearStepsList(): void;
  getStepsList(): Array<Update.UpdateStep>;
  setStepsList(value: Array<Update.UpdateStep>): void;
  addSteps(value?: Update.UpdateStep, index?: number): Update.UpdateStep;

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
    stepsList: Array<Update.UpdateStep.AsObject>,
  }

  export class UpdateStep extends jspb.Message {
    hasExpr(): boolean;
    clearExpr(): void;
    getExpr(): Expr | undefined;
    setExpr(value?: Expr): void;

    hasPat(): boolean;
    clearPat(): void;
    getPat(): RecordPattern | undefined;
    setPat(value?: RecordPattern): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateStep.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateStep): UpdateStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateStep;
    static deserializeBinaryFromReader(message: UpdateStep, reader: jspb.BinaryReader): UpdateStep;
  }

  export namespace UpdateStep {
    export type AsObject = {
      expr?: Expr.AsObject,
      pat?: RecordPattern.AsObject,
    }
  }
}

export class RefTerm extends jspb.Message {
  hasBuiltin(): boolean;
  clearBuiltin(): void;
  getBuiltin(): Builtin;
  setBuiltin(value: Builtin): void;

  hasOp(): boolean;
  clearOp(): void;
  getOp(): Op;
  setOp(value: Op): void;

  hasBinder(): boolean;
  clearBinder(): void;
  getBinder(): string;
  setBinder(value: string): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): RefTemplate | undefined;
  setTemplate(value?: RefTemplate): void;

  hasTopLevelDecl(): boolean;
  clearTopLevelDecl(): void;
  getTopLevelDecl(): string;
  setTopLevelDecl(value: string): void;

  getSumCase(): RefTerm.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefTerm.AsObject;
  static toObject(includeInstance: boolean, msg: RefTerm): RefTerm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefTerm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefTerm;
  static deserializeBinaryFromReader(message: RefTerm, reader: jspb.BinaryReader): RefTerm;
}

export namespace RefTerm {
  export type AsObject = {
    builtin: Builtin,
    op: Op,
    binder: string,
    template?: RefTemplate.AsObject,
    topLevelDecl: string,
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    BUILTIN = 1,
    OP = 2,
    BINDER = 3,
    TEMPLATE = 4,
    TOP_LEVEL_DECL = 5,
  }
}

export class RefTemplate extends jspb.Message {
  hasInternal(): boolean;
  clearInternal(): void;
  getInternal(): string;
  setInternal(value: string): void;

  hasExternal(): boolean;
  clearExternal(): void;
  getExternal(): RefTemplate.External | undefined;
  setExternal(value?: RefTemplate.External): void;

  getSumCase(): RefTemplate.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: RefTemplate): RefTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefTemplate;
  static deserializeBinaryFromReader(message: RefTemplate, reader: jspb.BinaryReader): RefTemplate;
}

export namespace RefTemplate {
  export type AsObject = {
    internal: string,
    external?: RefTemplate.External.AsObject,
  }

  export class External extends jspb.Message {
    getGroupId(): string;
    setGroupId(value: string): void;

    getTplId(): string;
    setTplId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): External.AsObject;
    static toObject(includeInstance: boolean, msg: External): External.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: External, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): External;
    static deserializeBinaryFromReader(message: External, reader: jspb.BinaryReader): External;
  }

  export namespace External {
    export type AsObject = {
      groupId: string,
      tplId: string,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    INTERNAL = 1,
    EXTERNAL = 2,
  }
}

export class TypedBinder extends jspb.Message {
  getBinder(): string;
  setBinder(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): Type | undefined;
  setType(value?: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypedBinder.AsObject;
  static toObject(includeInstance: boolean, msg: TypedBinder): TypedBinder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypedBinder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypedBinder;
  static deserializeBinaryFromReader(message: TypedBinder, reader: jspb.BinaryReader): TypedBinder;
}

export namespace TypedBinder {
  export type AsObject = {
    binder: string,
    type?: Type.AsObject,
  }
}

export class Type extends jspb.Message {
  hasRef(): boolean;
  clearRef(): void;
  getRef(): RefType | undefined;
  setRef(value?: RefType): void;

  hasArr(): boolean;
  clearArr(): void;
  getArr(): Type.Arr | undefined;
  setArr(value?: Type.Arr): void;

  hasApp(): boolean;
  clearApp(): void;
  getApp(): Type.App | undefined;
  setApp(value?: Type.App): void;

  hasAbs(): boolean;
  clearAbs(): void;
  getAbs(): Type.Abs | undefined;
  setAbs(value?: Type.Abs): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Type.Data | undefined;
  setData(value?: Type.Data): void;

  hasRecord(): boolean;
  clearRecord(): void;
  getRecord(): Type.Record | undefined;
  setRecord(value?: Type.Record): void;

  hasVariant(): boolean;
  clearVariant(): void;
  getVariant(): Type.Variant | undefined;
  setVariant(value?: Type.Variant): void;

  hasContract(): boolean;
  clearContract(): void;
  getContract(): Type.Contract | undefined;
  setContract(value?: Type.Contract): void;

  hasAwait(): boolean;
  clearAwait(): void;
  getAwait(): Type.Await | undefined;
  setAwait(value?: Type.Await): void;

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
    ref?: RefType.AsObject,
    arr?: Type.Arr.AsObject,
    app?: Type.App.AsObject,
    abs?: Type.Abs.AsObject,
    data?: Type.Data.AsObject,
    record?: Type.Record.AsObject,
    variant?: Type.Variant.AsObject,
    contract?: Type.Contract.AsObject,
    await?: Type.Await.AsObject,
  }

  export class Arr extends jspb.Message {
    clearArgsList(): void;
    getArgsList(): Array<Type>;
    setArgsList(value: Array<Type>): void;
    addArgs(value?: Type, index?: number): Type;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): Type | undefined;
    setResult(value?: Type): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Arr.AsObject;
    static toObject(includeInstance: boolean, msg: Arr): Arr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Arr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Arr;
    static deserializeBinaryFromReader(message: Arr, reader: jspb.BinaryReader): Arr;
  }

  export namespace Arr {
    export type AsObject = {
      argsList: Array<Type.AsObject>,
      result?: Type.AsObject,
    }
  }

  export class App extends jspb.Message {
    hasRef(): boolean;
    clearRef(): void;
    getRef(): RefType | undefined;
    setRef(value?: RefType): void;

    clearArgsList(): void;
    getArgsList(): Array<Type>;
    setArgsList(value: Array<Type>): void;
    addArgs(value?: Type, index?: number): Type;

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
      ref?: RefType.AsObject,
      argsList: Array<Type.AsObject>,
    }
  }

  export class Abs extends jspb.Message {
    clearBindersList(): void;
    getBindersList(): Array<string>;
    setBindersList(value: Array<string>): void;
    addBinders(value: string, index?: number): string;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Type | undefined;
    setBody(value?: Type): void;

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
      bindersList: Array<string>,
      body?: Type.AsObject,
    }
  }

  export class Data extends jspb.Message {
    getBuiltin(): BuiltinType;
    setBuiltin(value: BuiltinType): void;

    clearArgsList(): void;
    getArgsList(): Array<Type>;
    setArgsList(value: Array<Type>): void;
    addArgs(value?: Type, index?: number): Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      builtin: BuiltinType,
      argsList: Array<Type.AsObject>,
    }
  }

  export class Record extends jspb.Message {
    clearFieldsList(): void;
    getFieldsList(): Array<TypeField>;
    setFieldsList(value: Array<TypeField>): void;
    addFields(value?: TypeField, index?: number): TypeField;

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
      fieldsList: Array<TypeField.AsObject>,
    }
  }

  export class Variant extends jspb.Message {
    clearTagsList(): void;
    getTagsList(): Array<TypeField>;
    setTagsList(value: Array<TypeField>): void;
    addTags(value?: TypeField, index?: number): TypeField;

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
      tagsList: Array<TypeField.AsObject>,
    }
  }

  export class Contract extends jspb.Message {
    clearArgsList(): void;
    getArgsList(): Array<TypeField>;
    setArgsList(value: Array<TypeField>): void;
    addArgs(value?: TypeField, index?: number): TypeField;

    clearChoicesList(): void;
    getChoicesList(): Array<TypeChoice>;
    setChoicesList(value: Array<TypeChoice>): void;
    addChoices(value?: TypeChoice, index?: number): TypeChoice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contract.AsObject;
    static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contract;
    static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
  }

  export namespace Contract {
    export type AsObject = {
      argsList: Array<TypeField.AsObject>,
      choicesList: Array<TypeChoice.AsObject>,
    }
  }

  export class Await extends jspb.Message {
    clearChoicesList(): void;
    getChoicesList(): Array<TypeChoice>;
    setChoicesList(value: Array<TypeChoice>): void;
    addChoices(value?: TypeChoice, index?: number): TypeChoice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Await.AsObject;
    static toObject(includeInstance: boolean, msg: Await): Await.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Await, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Await;
    static deserializeBinaryFromReader(message: Await, reader: jspb.BinaryReader): Await;
  }

  export namespace Await {
    export type AsObject = {
      choicesList: Array<TypeChoice.AsObject>,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    REF = 1,
    ARR = 2,
    APP = 3,
    ABS = 4,
    DATA = 5,
    RECORD = 6,
    VARIANT = 7,
    CONTRACT = 8,
    AWAIT = 9,
  }
}

export class RefType extends jspb.Message {
  hasBuiltin(): boolean;
  clearBuiltin(): void;
  getBuiltin(): BuiltinType;
  setBuiltin(value: BuiltinType): void;

  hasTopLevelDecl(): boolean;
  clearTopLevelDecl(): void;
  getTopLevelDecl(): string;
  setTopLevelDecl(value: string): void;

  hasVar(): boolean;
  clearVar(): void;
  getVar(): string;
  setVar(value: string): void;

  getSumCase(): RefType.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefType.AsObject;
  static toObject(includeInstance: boolean, msg: RefType): RefType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefType;
  static deserializeBinaryFromReader(message: RefType, reader: jspb.BinaryReader): RefType;
}

export namespace RefType {
  export type AsObject = {
    builtin: BuiltinType,
    topLevelDecl: string,
    pb_var: string,
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    BUILTIN = 1,
    TOP_LEVEL_DECL = 2,
    VAR = 3,
  }
}

export class TypeField extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): Type | undefined;
  setType(value?: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeField.AsObject;
  static toObject(includeInstance: boolean, msg: TypeField): TypeField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeField;
  static deserializeBinaryFromReader(message: TypeField, reader: jspb.BinaryReader): TypeField;
}

export namespace TypeField {
  export type AsObject = {
    field: string,
    type?: Type.AsObject,
  }
}

export class TypeChoice extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  clearParamsList(): void;
  getParamsList(): Array<TypeField>;
  setParamsList(value: Array<TypeField>): void;
  addParams(value?: TypeField, index?: number): TypeField;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): Type | undefined;
  setResult(value?: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeChoice.AsObject;
  static toObject(includeInstance: boolean, msg: TypeChoice): TypeChoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeChoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeChoice;
  static deserializeBinaryFromReader(message: TypeChoice, reader: jspb.BinaryReader): TypeChoice;
}

export namespace TypeChoice {
  export type AsObject = {
    label: string,
    paramsList: Array<TypeField.AsObject>,
    result?: Type.AsObject,
  }
}

export class ContractExpr extends jspb.Message {
  hasPrecondition(): boolean;
  clearPrecondition(): void;
  getPrecondition(): Expr | undefined;
  setPrecondition(value?: Expr): void;

  hasAgreement(): boolean;
  clearAgreement(): void;
  getAgreement(): Agreement | undefined;
  setAgreement(value?: Agreement): void;

  hasAwait(): boolean;
  clearAwait(): void;
  getAwait(): Await | undefined;
  setAwait(value?: Await): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractExpr.AsObject;
  static toObject(includeInstance: boolean, msg: ContractExpr): ContractExpr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractExpr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractExpr;
  static deserializeBinaryFromReader(message: ContractExpr, reader: jspb.BinaryReader): ContractExpr;
}

export namespace ContractExpr {
  export type AsObject = {
    precondition?: Expr.AsObject,
    agreement?: Agreement.AsObject,
    await?: Await.AsObject,
  }
}

export class Await extends jspb.Message {
  clearChoicesList(): void;
  getChoicesList(): Array<Await.Choice>;
  setChoicesList(value: Array<Await.Choice>): void;
  addChoices(value?: Await.Choice, index?: number): Await.Choice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Await.AsObject;
  static toObject(includeInstance: boolean, msg: Await): Await.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Await, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Await;
  static deserializeBinaryFromReader(message: Await, reader: jspb.BinaryReader): Await;
}

export namespace Await {
  export type AsObject = {
    choicesList: Array<Await.Choice.AsObject>,
  }

  export class Choice extends jspb.Message {
    getLabel(): string;
    setLabel(value: string): void;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Expr | undefined;
    setBody(value?: Expr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Choice.AsObject;
    static toObject(includeInstance: boolean, msg: Choice): Choice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Choice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Choice;
    static deserializeBinaryFromReader(message: Choice, reader: jspb.BinaryReader): Choice;
  }

  export namespace Choice {
    export type AsObject = {
      label: string,
      body?: Expr.AsObject,
    }
  }
}

export class Agreement extends jspb.Message {
  clearPartiesList(): void;
  getPartiesList(): Array<Expr>;
  setPartiesList(value: Array<Expr>): void;
  addParties(value?: Expr, index?: number): Expr;

  hasText(): boolean;
  clearText(): void;
  getText(): Expr | undefined;
  setText(value?: Expr): void;

  clearObserversList(): void;
  getObserversList(): Array<Expr>;
  setObserversList(value: Array<Expr>): void;
  addObservers(value?: Expr, index?: number): Expr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Agreement.AsObject;
  static toObject(includeInstance: boolean, msg: Agreement): Agreement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Agreement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Agreement;
  static deserializeBinaryFromReader(message: Agreement, reader: jspb.BinaryReader): Agreement;
}

export namespace Agreement {
  export type AsObject = {
    partiesList: Array<Expr.AsObject>,
    text?: Expr.AsObject,
    observersList: Array<Expr.AsObject>,
  }
}

export class TemplateStoreStakeholders extends jspb.Message {
  clearStakeholdersList(): void;
  getStakeholdersList(): Array<TemplateGroupStakeholders>;
  setStakeholdersList(value: Array<TemplateGroupStakeholders>): void;
  addStakeholders(value?: TemplateGroupStakeholders, index?: number): TemplateGroupStakeholders;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateStoreStakeholders.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateStoreStakeholders): TemplateStoreStakeholders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateStoreStakeholders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateStoreStakeholders;
  static deserializeBinaryFromReader(message: TemplateStoreStakeholders, reader: jspb.BinaryReader): TemplateStoreStakeholders;
}

export namespace TemplateStoreStakeholders {
  export type AsObject = {
    stakeholdersList: Array<TemplateGroupStakeholders.AsObject>,
  }
}

export class TemplateGroupStakeholders extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearGroupStakeholdersList(): void;
  getGroupStakeholdersList(): Array<TemplateStakeholders>;
  setGroupStakeholdersList(value: Array<TemplateStakeholders>): void;
  addGroupStakeholders(value?: TemplateStakeholders, index?: number): TemplateStakeholders;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateGroupStakeholders.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateGroupStakeholders): TemplateGroupStakeholders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateGroupStakeholders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateGroupStakeholders;
  static deserializeBinaryFromReader(message: TemplateGroupStakeholders, reader: jspb.BinaryReader): TemplateGroupStakeholders;
}

export namespace TemplateGroupStakeholders {
  export type AsObject = {
    id: string,
    groupStakeholdersList: Array<TemplateStakeholders.AsObject>,
  }
}

export class TemplateStakeholders extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearParamsList(): void;
  getParamsList(): Array<string>;
  setParamsList(value: Array<string>): void;
  addParams(value: string, index?: number): string;

  hasObligables(): boolean;
  clearObligables(): void;
  getObligables(): Obligables | undefined;
  setObligables(value?: Obligables): void;

  hasControllers(): boolean;
  clearControllers(): void;
  getControllers(): Controllers | undefined;
  setControllers(value?: Controllers): void;

  getIsDaml1x(): boolean;
  setIsDaml1x(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateStakeholders.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateStakeholders): TemplateStakeholders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateStakeholders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateStakeholders;
  static deserializeBinaryFromReader(message: TemplateStakeholders, reader: jspb.BinaryReader): TemplateStakeholders;
}

export namespace TemplateStakeholders {
  export type AsObject = {
    id: string,
    paramsList: Array<string>,
    obligables?: Obligables.AsObject,
    controllers?: Controllers.AsObject,
    isDaml1x: boolean,
  }
}

export class Controllers extends jspb.Message {
  hasDetermined(): boolean;
  clearDetermined(): void;
  getDetermined(): Controllers.DeterminedControllers | undefined;
  setDetermined(value?: Controllers.DeterminedControllers): void;

  hasNotDetermined(): boolean;
  clearNotDetermined(): void;
  getNotDetermined(): string;
  setNotDetermined(value: string): void;

  getSumCase(): Controllers.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Controllers.AsObject;
  static toObject(includeInstance: boolean, msg: Controllers): Controllers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Controllers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Controllers;
  static deserializeBinaryFromReader(message: Controllers, reader: jspb.BinaryReader): Controllers;
}

export namespace Controllers {
  export type AsObject = {
    determined?: Controllers.DeterminedControllers.AsObject,
    notDetermined: string,
  }

  export class Controller extends jspb.Message {
    getChoice(): string;
    setChoice(value: string): void;

    clearPartiesList(): void;
    getPartiesList(): Array<AbstractParty>;
    setPartiesList(value: Array<AbstractParty>): void;
    addParties(value?: AbstractParty, index?: number): AbstractParty;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Controller.AsObject;
    static toObject(includeInstance: boolean, msg: Controller): Controller.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Controller, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Controller;
    static deserializeBinaryFromReader(message: Controller, reader: jspb.BinaryReader): Controller;
  }

  export namespace Controller {
    export type AsObject = {
      choice: string,
      partiesList: Array<AbstractParty.AsObject>,
    }
  }

  export class DeterminedControllers extends jspb.Message {
    clearControllersList(): void;
    getControllersList(): Array<Controllers.Controller>;
    setControllersList(value: Array<Controllers.Controller>): void;
    addControllers(value?: Controllers.Controller, index?: number): Controllers.Controller;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeterminedControllers.AsObject;
    static toObject(includeInstance: boolean, msg: DeterminedControllers): DeterminedControllers.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeterminedControllers, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeterminedControllers;
    static deserializeBinaryFromReader(message: DeterminedControllers, reader: jspb.BinaryReader): DeterminedControllers;
  }

  export namespace DeterminedControllers {
    export type AsObject = {
      controllersList: Array<Controllers.Controller.AsObject>,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    DETERMINED = 1,
    NOT_DETERMINED = 2,
  }
}

export class AbstractParty extends jspb.Message {
  hasLiteral(): boolean;
  clearLiteral(): void;
  getLiteral(): string;
  setLiteral(value: string): void;

  hasNeutral(): boolean;
  clearNeutral(): void;
  getNeutral(): AbstractParty.Neutral | undefined;
  setNeutral(value?: AbstractParty.Neutral): void;

  getSumCase(): AbstractParty.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbstractParty.AsObject;
  static toObject(includeInstance: boolean, msg: AbstractParty): AbstractParty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AbstractParty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbstractParty;
  static deserializeBinaryFromReader(message: AbstractParty, reader: jspb.BinaryReader): AbstractParty;
}

export namespace AbstractParty {
  export type AsObject = {
    literal: string,
    neutral?: AbstractParty.Neutral.AsObject,
  }

  export class Elim extends jspb.Message {
    hasProjection(): boolean;
    clearProjection(): void;
    getProjection(): string;
    setProjection(value: string): void;

    hasVariant(): boolean;
    clearVariant(): void;
    getVariant(): string;
    setVariant(value: string): void;

    hasHead(): boolean;
    clearHead(): void;
    getHead(): Unit | undefined;
    setHead(value?: Unit): void;

    hasTail(): boolean;
    clearTail(): void;
    getTail(): Unit | undefined;
    setTail(value?: Unit): void;

    getSumCase(): Elim.SumCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Elim.AsObject;
    static toObject(includeInstance: boolean, msg: Elim): Elim.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Elim, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Elim;
    static deserializeBinaryFromReader(message: Elim, reader: jspb.BinaryReader): Elim;
  }

  export namespace Elim {
    export type AsObject = {
      projection: string,
      variant: string,
      head?: Unit.AsObject,
      tail?: Unit.AsObject,
    }

    export enum SumCase {
      SUM_NOT_SET = 0,
      PROJECTION = 1,
      VARIANT = 2,
      HEAD = 3,
      TAIL = 4,
    }
  }

  export class Neutral extends jspb.Message {
    getHead(): string;
    setHead(value: string): void;

    clearElimsList(): void;
    getElimsList(): Array<AbstractParty.Elim>;
    setElimsList(value: Array<AbstractParty.Elim>): void;
    addElims(value?: AbstractParty.Elim, index?: number): AbstractParty.Elim;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Neutral.AsObject;
    static toObject(includeInstance: boolean, msg: Neutral): Neutral.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Neutral, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Neutral;
    static deserializeBinaryFromReader(message: Neutral, reader: jspb.BinaryReader): Neutral;
  }

  export namespace Neutral {
    export type AsObject = {
      head: string,
      elimsList: Array<AbstractParty.Elim.AsObject>,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    LITERAL = 1,
    NEUTRAL = 2,
  }
}

export class Obligables extends jspb.Message {
  hasDetermined(): boolean;
  clearDetermined(): void;
  getDetermined(): Obligables.DeterminedObligables | undefined;
  setDetermined(value?: Obligables.DeterminedObligables): void;

  hasNotDetermined(): boolean;
  clearNotDetermined(): void;
  getNotDetermined(): string;
  setNotDetermined(value: string): void;

  getSumCase(): Obligables.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Obligables.AsObject;
  static toObject(includeInstance: boolean, msg: Obligables): Obligables.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Obligables, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Obligables;
  static deserializeBinaryFromReader(message: Obligables, reader: jspb.BinaryReader): Obligables;
}

export namespace Obligables {
  export type AsObject = {
    determined?: Obligables.DeterminedObligables.AsObject,
    notDetermined: string,
  }

  export class ObligableClause extends jspb.Message {
    clearControllingList(): void;
    getControllingList(): Array<AbstractParty>;
    setControllingList(value: Array<AbstractParty>): void;
    addControlling(value?: AbstractParty, index?: number): AbstractParty;

    clearObligablesList(): void;
    getObligablesList(): Array<AbstractParty>;
    setObligablesList(value: Array<AbstractParty>): void;
    addObligables(value?: AbstractParty, index?: number): AbstractParty;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObligableClause.AsObject;
    static toObject(includeInstance: boolean, msg: ObligableClause): ObligableClause.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObligableClause, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObligableClause;
    static deserializeBinaryFromReader(message: ObligableClause, reader: jspb.BinaryReader): ObligableClause;
  }

  export namespace ObligableClause {
    export type AsObject = {
      controllingList: Array<AbstractParty.AsObject>,
      obligablesList: Array<AbstractParty.AsObject>,
    }
  }

  export class DeterminedObligables extends jspb.Message {
    clearClausesList(): void;
    getClausesList(): Array<Obligables.ObligableClause>;
    setClausesList(value: Array<Obligables.ObligableClause>): void;
    addClauses(value?: Obligables.ObligableClause, index?: number): Obligables.ObligableClause;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeterminedObligables.AsObject;
    static toObject(includeInstance: boolean, msg: DeterminedObligables): DeterminedObligables.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeterminedObligables, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeterminedObligables;
    static deserializeBinaryFromReader(message: DeterminedObligables, reader: jspb.BinaryReader): DeterminedObligables;
  }

  export namespace DeterminedObligables {
    export type AsObject = {
      clausesList: Array<Obligables.ObligableClause.AsObject>,
    }
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    DETERMINED = 1,
    NOT_DETERMINED = 2,
  }
}

export class PatternMatch extends jspb.Message {
  hasContractId(): boolean;
  clearContractId(): void;
  getContractId(): Expr | undefined;
  setContractId(value?: Expr): void;

  hasPattern(): boolean;
  clearPattern(): void;
  getPattern(): Expr | undefined;
  setPattern(value?: Expr): void;

  hasBody(): boolean;
  clearBody(): void;
  getBody(): Expr | undefined;
  setBody(value?: Expr): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatternMatch.AsObject;
  static toObject(includeInstance: boolean, msg: PatternMatch): PatternMatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatternMatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatternMatch;
  static deserializeBinaryFromReader(message: PatternMatch, reader: jspb.BinaryReader): PatternMatch;
}

export namespace PatternMatch {
  export type AsObject = {
    contractId?: Expr.AsObject,
    pattern?: Expr.AsObject,
    body?: Expr.AsObject,
  }
}

export class Scenario extends jspb.Message {
  clearStepsList(): void;
  getStepsList(): Array<Scenario.ScenarioStep>;
  setStepsList(value: Array<Scenario.ScenarioStep>): void;
  addSteps(value?: Scenario.ScenarioStep, index?: number): Scenario.ScenarioStep;

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
    stepsList: Array<Scenario.ScenarioStep.AsObject>,
  }

  export class ScenarioStep extends jspb.Message {
    hasExpr(): boolean;
    clearExpr(): void;
    getExpr(): Expr | undefined;
    setExpr(value?: Expr): void;

    hasPat(): boolean;
    clearPat(): void;
    getPat(): RecordPattern | undefined;
    setPat(value?: RecordPattern): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScenarioStep.AsObject;
    static toObject(includeInstance: boolean, msg: ScenarioStep): ScenarioStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScenarioStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScenarioStep;
    static deserializeBinaryFromReader(message: ScenarioStep, reader: jspb.BinaryReader): ScenarioStep;
  }

  export namespace ScenarioStep {
    export type AsObject = {
      expr?: Expr.AsObject,
      pat?: RecordPattern.AsObject,
    }
  }
}

export class Decl extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): DeclType | undefined;
  setType(value?: DeclType): void;

  hasTerm(): boolean;
  clearTerm(): void;
  getTerm(): DeclTerm | undefined;
  setTerm(value?: DeclTerm): void;

  getSumCase(): Decl.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Decl.AsObject;
  static toObject(includeInstance: boolean, msg: Decl): Decl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Decl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Decl;
  static deserializeBinaryFromReader(message: Decl, reader: jspb.BinaryReader): Decl;
}

export namespace Decl {
  export type AsObject = {
    type?: DeclType.AsObject,
    term?: DeclTerm.AsObject,
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    TYPE = 1,
    TERM = 2,
  }
}

export class DeclType extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearParamsList(): void;
  getParamsList(): Array<string>;
  setParamsList(value: Array<string>): void;
  addParams(value: string, index?: number): string;

  hasBody(): boolean;
  clearBody(): void;
  getBody(): Type | undefined;
  setBody(value?: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclType.AsObject;
  static toObject(includeInstance: boolean, msg: DeclType): DeclType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeclType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclType;
  static deserializeBinaryFromReader(message: DeclType, reader: jspb.BinaryReader): DeclType;
}

export namespace DeclType {
  export type AsObject = {
    name: string,
    paramsList: Array<string>,
    body?: Type.AsObject,
  }
}

export class DeclTerm extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getKind(): DeclTermKind;
  setKind(value: DeclTermKind): void;

  clearParamsList(): void;
  getParamsList(): Array<TypedBinder>;
  setParamsList(value: Array<TypedBinder>): void;
  addParams(value?: TypedBinder, index?: number): TypedBinder;

  hasResultType(): boolean;
  clearResultType(): void;
  getResultType(): Type | undefined;
  setResultType(value?: Type): void;

  hasBody(): boolean;
  clearBody(): void;
  getBody(): Expr | undefined;
  setBody(value?: Expr): void;

  hasTopology(): boolean;
  clearTopology(): void;
  getTopology(): ScenarioTopology | undefined;
  setTopology(value?: ScenarioTopology): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclTerm.AsObject;
  static toObject(includeInstance: boolean, msg: DeclTerm): DeclTerm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeclTerm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclTerm;
  static deserializeBinaryFromReader(message: DeclTerm, reader: jspb.BinaryReader): DeclTerm;
}

export namespace DeclTerm {
  export type AsObject = {
    name: string,
    kind: DeclTermKind,
    paramsList: Array<TypedBinder.AsObject>,
    resultType?: Type.AsObject,
    body?: Expr.AsObject,
    topology?: ScenarioTopology.AsObject,
  }
}

export class ScenarioTopology extends jspb.Message {
  hasWriter(): boolean;
  clearWriter(): void;
  getWriter(): Expr | undefined;
  setWriter(value?: Expr): void;

  clearReaderList(): void;
  getReaderList(): Array<Expr>;
  setReaderList(value: Array<Expr>): void;
  addReader(value?: Expr, index?: number): Expr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenarioTopology.AsObject;
  static toObject(includeInstance: boolean, msg: ScenarioTopology): ScenarioTopology.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenarioTopology, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenarioTopology;
  static deserializeBinaryFromReader(message: ScenarioTopology, reader: jspb.BinaryReader): ScenarioTopology;
}

export namespace ScenarioTopology {
  export type AsObject = {
    writer?: Expr.AsObject,
    readerList: Array<Expr.AsObject>,
  }
}

export enum ChoiceKind {
  MAY_CHOOSE_CONSUMING = 0,
  MAY_CHOOSE_NONCONSUMING = 1,
  MUST_CHOOSE = 2,
}

export enum Op {
  OP_ADD = 0,
  OP_SUB = 1,
  OP_MULT = 2,
  OP_DIV = 3,
  OP_INTMOD = 4,
  OP_EXP = 5,
  OP_LESS = 6,
  OP_LEQ = 7,
  OP_GREATER = 8,
  OP_GEQ = 9,
  OP_EQ = 10,
  OP_NEQ = 11,
  OP_AND = 12,
  OP_OR = 13,
  OP_APPEND = 14,
  OP_OVERLAY = 15,
}

export enum BuiltinType {
  BT_DATA = 0,
  BT_ANY = 1,
  BT_VOID = 2,
  BT_BOOL = 3,
  BT_INTEGER = 4,
  BT_DECIMAL = 5,
  BT_CHAR = 6,
  BT_TEXT = 7,
  BT_TIME = 8,
  BT_RELTIME = 9,
  BT_LIST = 10,
  BT_PARTY = 11,
  BT_CONTRACTID = 12,
  BT_UPDATE = 13,
  BT_SCENARIO = 14,
  BT_CHOICE = 15,
  BT_CONTRACT = 16,
  BT_RECORD = 17,
  BT_PUREVALUE = 18,
  BT_ASSERTION = 19,
  BT_TEMPLATE = 20,
  BT_UNIT = 21,
}

export enum Builtin {
  B_TOTEXT = 0,
  B_SINGLETON = 1,
  B_UNPACK = 2,
  B_FROMRELTIME = 3,
  B_TORELTIME = 4,
  B_SUBTIME = 5,
  B_FROMINTEGER = 6,
  B_TOINTEGER = 7,
  B_PURE = 8,
  B_PASS = 9,
  B_CREATE = 10,
  B_CREATETRANSIENT = 11,
  B_DELETE = 12,
  B_ASSERT = 13,
  B_ASSERTISACTIVEAT = 14,
  B_MUSTFAILAT = 15,
  B_ROUND = 16,
  B_DIVD = 17,
  B_REMD = 18,
  B_NOT = 19,
  B_OR = 20,
  B_AND = 21,
  B_NIL = 22,
  B_CONS = 23,
  B_FOLDL = 24,
  B_FOLDR = 25,
  B_LOOKUP = 26,
  B_EXTEND = 27,
  B_TAG = 28,
  B_EXERCISES = 29,
  B_COMMIT = 30,
  B_FIX = 31,
  B_FETCH = 32,
  B_GETTIME = 33,
  B_ABORT = 34,
  B_ADDRELTIME = 35,
  B_EXPLODE_TEXT = 36,
  B_TIME_TO_UNIX_MICROSECONDS = 37,
  B_UNIX_MICROSECONDS_TO_TIME = 38,
  B_IMPLODE_TEXT = 39,
}

export enum DeclTermKind {
  TEMPLATE = 0,
  FUNCTION = 1,
  TEST = 2,
  LET = 3,
}

