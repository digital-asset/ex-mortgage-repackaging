import * as React from 'react';
import { IOption } from 'src/components/Select';
import { WaitingButton } from 'src/components/WaitingButton';
import { FormFields } from 'src/containers/FormField';
import { IUserStore, UserContext } from 'src/containers/UserStore';
import { IPoolTypeEnum } from 'src/contracts/CustomTypes';
import { MortgagePoolAgreementDraft } from 'src/contracts/MortgagePool/MortgagePoolAgreementDraft';
import * as uuid from 'uuid'
import { EndlessPromise } from 'src/helpers';

const poolTypeOptions: IOption[] = [
  {label: 'Fixed', value: 'Fixed'},
  {label: 'Floating', value: 'Floating'},
]
const passThroughRateOptions: IOption[] = [
  // {label: '2.5%', value: '2.5'}, option 2.5% is turned off due to too many required combinations
  {label: '3.5%', value: '3.5'},
  {label: '4.5%', value: '4.5'},
]

export function Show({draft}: {draft: MortgagePoolAgreementDraft}): JSX.Element {
  return FormFields([
    {
      onChangeOrValue: draft.argument.agreementDraftFields.poolType.constructor,
      options: poolTypeOptions,
      title: 'Pool type',
    },
    {
      onChangeOrValue: `${draft.argument.agreementDraftFields.passThroughRate}%`,
      options: passThroughRateOptions,
      title: 'Pass-Through Rate',
    }
  ])
}

export interface IValidState {
  passThroughRate: number,
  poolType: IPoolTypeEnum,
}
export interface IProps {
  onCreate: (draft: MortgagePoolAgreementDraft) => void
}
interface IState {
  passThroughRate: number | undefined,
  poolType: IPoolTypeEnum | undefined,
}

export class New extends React.Component<IProps, IState> {
  public state = { poolType: undefined, passThroughRate: undefined }

  private async mkDraft(context: IUserStore): Promise<void> {
    const draft = await context
      .partyState!
      .mortgagePoolHolder!
      .mortgagePoolHolderRights
      .mortgagePoolHolderCreateMortgagePoolAgreementDraft({
        faceValue: 0.0,
        lastLoanMaturity: undefined,
        passThroughRate: this.state.passThroughRate!,
        poolType: { constructor: this.state.poolType! },
        referenceNumber: uuid().substr(0, 8)
      })
    context.logic.contracts.setVisited([draft], false)
    await context.logic.contracts.reload()
    await this.props.onCreate(draft)
    return
  }

  public render() {
    return [
      FormFields([
      {
        onChangeOrValue: (poolType: IPoolTypeEnum) => this.setState({ poolType }),
        options: poolTypeOptions,
        title: 'Pool type'
      },
      {
        onChangeOrValue: passThroughRate => this.setState({ passThroughRate: parseFloat(passThroughRate) }),
        options: passThroughRateOptions,
        title: 'Pass-Through Rate'
      }]),
      <UserContext.Consumer key="context">
        { context => <WaitingButton
            onClick={() => this.mkDraft(context).then(EndlessPromise)}
            styling={'primary'}
            disabled={!(this.state.poolType && this.state.passThroughRate)}
            loading="Saving..."
            css="margin-top: 32px;"
          >
            Create
          </WaitingButton>
        }
      </UserContext.Consumer>
    ]
  }
}
