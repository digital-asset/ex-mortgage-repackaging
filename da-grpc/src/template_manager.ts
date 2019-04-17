import { Identifier } from "../local/com/digitalasset/ledger/api/v1/value_pb";

export class TemplateManager {
    private entityNameToId: Map<string, Identifier>
    constructor(entityNameToId: Map<string, Identifier>) {
        this.entityNameToId = entityNameToId
    }

    public getIdentifier(entityName: string): Identifier {
        return this.entityNameToId.get(entityName)
    }
}