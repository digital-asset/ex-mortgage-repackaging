import * as React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IHeader } from 'src/components/AbstractList'
import { ActionButtons } from 'src/containers/ActionButtons';
import { ContentContainer } from 'src/containers/Content';
import DetailsCell from 'src/containers/DetailsCell';
import * as Header from 'src/containers/Header';
import { ListDropDown } from 'src/containers/ListDropDown';
import { Role, userByParty, UserContext } from 'src/containers/UserStore';
import { MortgagePoolAgreementDraft } from "src/contracts/MortgagePool/MortgagePoolAgreementDraft";
import { routeByName } from 'src/routes';
import theme from 'src/theme';
import { prettyDate, prettyMoney } from '../contracts/helpers'
import { EndlessPromise } from 'src/helpers';

function details(c: MortgagePoolAgreementDraft) {
  return [
    { label: 'Alleged By', value: userByParty[c.argument.mortgagePoolHolder].name },
    { label: 'Pool Type', value: c.argument.agreementDraftFields.poolType.constructor },
    { label: 'Pass-through Rate', value: `${c.argument.agreementDraftFields.passThroughRate}%` },
    { label: 'Maturity', value: prettyDate(c.getMaturity()) },
  ]
}

interface IState {
  searchValue: string | undefined,
  showDropdownByCid: {[cid: string]: boolean}
}

class MortgagePoolsAgreementDraftsWithHistory
extends React.Component<RouteComponentProps<Header.IPropsForRouter>, IState> {
  constructor(props: RouteComponentProps<Header.IPropsForRouter>){
    super(props)
    this.toggleRowDropDown = this.toggleRowDropDown.bind(this);

    this.state = {
      searchValue: undefined,
      showDropdownByCid: {},
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  public headers: Array<IHeader<MortgagePoolAgreementDraft>> = [
    {
      label: 'Reference #',
      renderer: c => c.argument.agreementDraftFields.referenceNumber,
      size: '**',
      toSortable: c => c.argument.agreementDraftFields.referenceNumber,
    },
    {
      label: 'Details',
      renderer: (c) => <DetailsCell toggler={this.toggleRowDropDown} cid={c.cid} pairs={details(c)}/>,
      size: '****',
    },
    {
      label: 'Face Value',
      renderer: c => prettyMoney(c.argument.agreementDraftFields.faceValue),
      size: '***',
      toSortable: c => c.argument.agreementDraftFields.faceValue,
    },
    {
      label: 'Actions',
      renderer: draft => <ActionButtons choices={[
        {
          done: { color: theme.colorNotification, message: "", icon: "" },
          executor: _ => {
            this
              .props
              .history
              .push(
                routeByName
                  .draft
                  .mkEdit(draft.argument.agreementDraftFields.referenceNumber)
              )
            return EndlessPromise()
          },
          name: 'Edit',
          role: Role.MortgagePoolHolder,
          styling: 'primary',
        }
      ]}/>,
      size: '***',
    }
  ]

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
              'drafts',
              this.state.searchValue,
              'No mortgage pools yet.'
            )

            return [
              <Header.Header key='0'
                header={"Mortgage Pool Agreement Drafts"}
                onSearchChange={this.onSearchChange}
              >
                <Header.HeaderButton onClick={() => this.props.history.push(routeByName.draft.mkNew())}>
                  <i className='icon-da-addnew' style={{fontSize: '16px', marginRight: '8px'}}/>
                    Create New
                </Header.HeaderButton>
              </Header.Header>,
              <ContentContainer key='1'>
                <ListDropDown
                  recordsOrMessage={records}
                  headers={this.headers}
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

export const MortgagePoolAgreementDrafts = withRouter(MortgagePoolsAgreementDraftsWithHistory)
