import * as React from 'react';
import { WaitingButton } from 'src/components/WaitingButton';
import { FormFields } from 'src/containers/FormField';
import { IUserStore, Role, userByParty, UserContext, users } from 'src/containers/UserStore';
import { MortgagePoolAgreementDraft } from 'src/contracts/MortgagePool/MortgagePoolAgreementDraft';
import { MortgagePoolAgreementProposal } from 'src/contracts/MortgagePool/MortgagePoolAgreementProposal';
import { prettyDate, prettyMoney } from '../../contracts/helpers';

export function Show(proposal: MortgagePoolAgreementProposal){
  return FormFields([
    {
      onChangeOrValue: prettyDate(proposal.argument.agreementFields.lastLoanMaturity),
      title: 'Maturity',
    }, {
      onChangeOrValue: prettyMoney(proposal.argument.agreementFields.faceValue),
      title: 'Face Value',
    }, {
      onChangeOrValue: userByParty[proposal.argument.securitizer].name,
      title: 'Counterparty',
    }
  ])
}

export interface IEdit {
  draft: MortgagePoolAgreementDraft,
  onSubmit(proposal: MortgagePoolAgreementProposal): void
}

export class Edit extends React.Component<IEdit, { counterParty?: string }> {
  public state = { counterParty: undefined }

  private async submit(context: IUserStore){
    const { mortgagePoolAgreementProposal } = await this.props.draft.mortgagePoolHolderSubmitProposal(
      this.state.counterParty!,
      context.logic.contracts.poolsByCusips(this.props.draft.getUnderlyingCusips())!.map(pool => pool.cid)
    )
    await context.logic.contracts.reload()
    this.props.onSubmit(mortgagePoolAgreementProposal)
  }

  public render(){
    return <UserContext.Consumer>
      { context => [
        FormFields([
          {
            onChangeOrValue: prettyDate(this.props.draft.getMaturity()),
            title: 'Maturity',
          }, {
            onChangeOrValue: prettyMoney(this.props.draft.argument.agreementDraftFields.faceValue),
            title: 'Face Value',
          }, {
            onChangeOrValue: counterParty => this.setState({ counterParty }),
            options: users.filter(u => u.party === Role.Securitizer).map(u => ({ label: u.name, value: u.party })),
            title: 'Counterparty',
          }
        ]),
        <WaitingButton
          key='button'
          onClick={() => this.submit(context)}
          styling={'primary'}
          disabled={!this.state.counterParty}
          css="margin-top: 25px;"
          loading=""
        >
          Submit
        </WaitingButton>
      ] }
    </UserContext.Consumer>
  }
}