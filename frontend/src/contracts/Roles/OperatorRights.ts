import { Contract, createContract, DaGrpc, IContractProto, ILeafType } from '@da/da-grpc'
import { MortgagePool } from '../MortgagePool/MortgagePool';
import { MortgagePoolHolderRights } from './MortgagePoolHolderRights';
import { RegistryRights } from './RegistryRights';
import { SecuritizerRights } from './SecuritizerRights';

export class OperatorRights extends Contract<{ operator: string }> {
  public static readonly contractProto: IContractProto = {
    argument: [{ label: 'operator', type: ILeafType.Party }],
    choices: [
      {
        argument: [
          { label: 'mortgagePoolAgreementCid', type: ILeafType.ContractId },
          { label: 'underlyingMortgagePoolCids', type: { argument: ILeafType.ContractId } },
          { label: 'delegatedRegistrationRightsCid', type: ILeafType.ContractId },
          { label: 'delegatedSecuritizerRightsCid', type: ILeafType.ContractId }
        ],
        name: 'SettleMortgagePoolAgreement',
        partyLabel: 'operator'
      },
      {
        argument: [
          { label: 'mortgagePoolHolder', type: ILeafType.Party }
        ],
        name: 'OnboardMortgagePoolHolder',
        partyLabel: 'operator'
      },
      {
        argument: [
          { label: 'registry', type: ILeafType.Party }
        ],
        name: 'OnboardRegistry',
        partyLabel: 'operator'
        //  returning ContractId RegistryRights
      },
      {
        argument: [
          { label: 'securitizer', type: ILeafType.Party }
        ],
        name: 'OnboardSecuritizer',
        partyLabel: 'operator'
        /*returning ContractId SecuritizerRights*/
      }
    ],
    module: 'Main.Roles',
    name: 'OperatorRights',
    signatory: 'operator',
  }

  public static async create(daGrpc: DaGrpc, operator: string): Promise<OperatorRights> {
    return await createContract(daGrpc, { operator }, this)
  }

  public async operatorSettleMortgagePoolAgreement(
    args: {
      mortgagePoolAgreementCid: string,
      underlyingMortgagePoolCids: string[],
      delegatedRegistrationRightsCid: string,
      delegatedSecuritizerRightsCid: string,
    }
  ): Promise<MortgagePool> {
    return (await this.exercise('SettleMortgagePoolAgreement', args)).getFirst(MortgagePool)
  }

  public async operatorOnboardMortgagePoolHolder(mortgagePoolHolder: string): Promise<MortgagePoolHolderRights> {
    return (await this.exercise('OnboardMortgagePoolHolder', { mortgagePoolHolder })).getFirst(MortgagePoolHolderRights)
  }

  public async operatorOnboardRegistry(registry: string): Promise<RegistryRights> {
    return (await this.exercise('OnboardRegistry', { registry })).getFirst(RegistryRights)
  }

  public async operatorOnboardSecuritizer(securitizer: string): Promise<SecuritizerRights> {
    return (await this.exercise('OnboardSecuritizer', { securitizer })).getFirst(SecuritizerRights)
  }
}
