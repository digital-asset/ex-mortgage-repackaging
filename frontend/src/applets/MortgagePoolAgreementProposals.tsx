import * as React from 'react';
import { IHeader } from 'src/components/AbstractList'
import { ActionButtons, IChoice } from 'src/containers/ActionButtons';
import { ListDropDown } from 'src/containers/ListDropDown';
import { IUserStore, Role, userByParty, UserContext } from 'src/containers/UserStore';
import { ContentContainer } from '../containers/Content';
import DetailsCell from '../containers/DetailsCell';
import * as Header from '../containers/Header';
import { prettyDate, prettyMoney } from '../contracts/helpers'
import { MortgagePoolAgreementProposal } from "../contracts/MortgagePool/MortgagePoolAgreementProposal";
import theme from '../theme';
import { NewContractNotification } from './helpers'

function details(c: MortgagePoolAgreementProposal) {
  return [
    { label: 'Alleged By', value: userByParty[c.argument.mortgagePoolHolder].name },
    { label: 'Pool Type', value: c.argument.agreementFields.poolType.constructor },
    { label: 'Pass-through Rate', value: `${c.argument.agreementFields.passThroughRate}%` },
    { label: 'Maturity', value: prettyDate(c.argument.agreementFields.lastLoanMaturity) },
  ]
}

function choices(proposal: MortgagePoolAgreementProposal): IChoice[] {
  return [
    {
      done: { color: theme.colorNotification, icon: 'icon-da-check', message: 'Accepted' },
      executor: context => proposal.securitizerAccept(
        context.logic.contracts.getAvailableCusip()!.cid,
        Role.Registry
      ),
      name: 'Accept',
      role: Role.Securitizer,
      styling: 'primary',
    },
    {
      done: { color: theme.colorRejected, icon: 'icon-da-close', message: 'Rejected' },
      executor: context => proposal.securitizerReject(
        context
          .logic
          .contracts
          .poolsByCusips(proposal.getUnderlyingCusips())!
          .map(({ cid }) => cid)
      ),
      name: 'Reject',
      role: Role.Securitizer,
      styling: 'secondary',
    },
    {
      done: { color: theme.colorNotification, icon: 'icon-da-check', message: 'Withdrawn' },
      executor: context => proposal.mortgagePoolHolderWithdraw(
        context
          .logic
          .contracts
          .poolsByCusips(proposal.getUnderlyingCusips())!
          .map(({ cid }) => cid)
      ),
      name: 'Withdraw',
      role: Role.MortgagePoolHolder,
      styling: 'primary',
    }
  ]
}

interface IProps {
  header: Header.IProps
}

interface IState {
  searchValue: string | undefined,
  showDropdownByCid: { [cid: string]: boolean },
}
class MortgagePoolsAgreementProposalsWithContext extends React.Component<IProps & { context: IUserStore }, IState> {
  constructor(props: IProps & { context: IUserStore }){
    super(props)
    this.toggleRowDropDown = this.toggleRowDropDown.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this)

    this.state = {
      searchValue: undefined,
      showDropdownByCid: {}
    }
  }

  public headers(): Array<IHeader<MortgagePoolAgreementProposal>> { return [
    {
      label: 'Reference #',
      renderer: c => c.argument.agreementFields.referenceNumber,
      size: '**',
      toSortable: c => c.argument.agreementFields.referenceNumber,
    },
    {
      label: 'Details',
      renderer: c => <DetailsCell toggler={this.toggleRowDropDown} cid={c.cid} pairs={details(c)}/>,
      size: '****',
    },
    {
      label: 'Face Value',
      renderer: c => prettyMoney(c.argument.agreementFields.faceValue),
      size: '***',
      toSortable: c => c.argument.agreementFields.faceValue,
    },
    {
      label: 'Actions',
      renderer: c => <div><ActionButtons choices={choices(c)} />{NewContractNotification(c.cid)}</div>,
      size: '***',
    }
  ] }


  public onSearchChange(searchValue: string) { this.setState({ searchValue }) }

  // TODO: move to ListDropDown
  public toggleRowDropDown(cid: string) {
    this.state.showDropdownByCid[cid] = this.state.showDropdownByCid[cid]
      ? !this.state.showDropdownByCid[cid]
      : true;
    this.forceUpdate();
  }

  public render() {
    return (
      <UserContext.Consumer>
        { context => {
          const records = context.logic.contracts.searchForComponent(
            'proposals',
            this.state.searchValue,
            'No proposals yet.'
          )

          return [
            <Header.Header key='0'
              header="Mortgage Pool Agreement Proposals"
              onSearchChange={this.onSearchChange}
            />,
            <ContentContainer key='1'>
              <ListDropDown
                recordsOrMessage={records}
                headers={this.headers()}
                showDropdownByCid={this.state.showDropdownByCid}
                getKey={contract => contract.cid}
              />
            </ContentContainer>
          ]
        }
      }
      </UserContext.Consumer>
    )
  }
}

export default function MortgagePoolsAgreementProposals(props: IProps){
  return <UserContext.Consumer>
    {context => <MortgagePoolsAgreementProposalsWithContext {...props} context={context}/>}
  </UserContext.Consumer>
}