import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'
import { IMortgagePoolAgreementDraftFields, MortgagePoolAgreementDraftFields } from '../CustomTypes';
import { MortgagePoolAgreementDraft } from '../MortgagePool/MortgagePoolAgreementDraft';

interface IProps {
  mortgagePoolHolder: string,
  operator: string
}

export class MortgagePoolHolderRights extends Contract<IProps> {
  public static readonly contractProto: IContractProto = {
    argument: [
      { label: 'mortgagePoolHolder', type: ILeafType.Party },
      { label: 'operator', type: ILeafType.Party }
    ],
    choices: [
      {
        argument: [
           { label: 'agreementDraftFields', type: MortgagePoolAgreementDraftFields },
        ],
        name: 'CreateMortgagePoolAgreementDraft',
        partyLabel: 'mortgagePoolHolder'
      },
    ],
    module: 'Main.Roles',
    name: 'MortgagePoolHolderRights',
    signatory: 'operator',
  }

  public static async create(daGrpc: DaGrpc, props: IProps): Promise<MortgagePoolHolderRights> {
    return await createContract(daGrpc, props, this)
  }

  public async mortgagePoolHolderCreateMortgagePoolAgreementDraft(
    agreementDraftFields: IMortgagePoolAgreementDraftFields
  ): Promise<MortgagePoolAgreementDraft> {
    return (await this.exercise('CreateMortgagePoolAgreementDraft', { agreementDraftFields }))
      .getFirst(MortgagePoolAgreementDraft)
  }
}