import * as React from 'react';
import { IHeader } from 'src/components/AbstractList'
import { ActionButtons } from 'src/containers/ActionButtons';
import { ListDropDown } from 'src/containers/ListDropDown';
import { IUserStore, Role, userByParty, UserContext } from 'src/containers/UserStore';
import theme from 'src/theme';
import { ContentContainer } from '../containers/Content';
import DetailsCell from '../containers/DetailsCell';
import * as Header from '../containers/Header';
import { prettyDate, prettyMoney } from '../contracts/helpers'
import { MortgagePoolAgreement } from "../contracts/MortgagePool/MortgagePoolAgreement";
import { NewContractNotification } from './helpers'

function details(c: MortgagePoolAgreement) {
  return [
    { label: 'Alleged By', value: userByParty[c.argument.mortgagePoolHolder].name },
    { label: 'Pool Type', value: c.argument.agreementFields.poolType.constructor },
    { label: 'Pass-through Rate', value: `${c.argument.agreementFields.passThroughRate}%` },
    { label: 'Maturity', value: prettyDate(c.argument.agreementFields.lastLoanMaturity) },
  ]
}

interface IProps {
  header: Header.IProps
}

interface IState {
  searchValue: string | undefined,
  showDropdownByCid: {},
}

class MortgagePoolsAgreementsWithContext extends React.Component<IProps & { context: IUserStore }, IState> {
  constructor(props: IProps & { context: IUserStore }){
    super(props)
    this.toggleRowDropDown = this.toggleRowDropDown.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this)

    this.state = {
      searchValue: undefined,
      showDropdownByCid: {},
    }
  }

  public headers: Array<IHeader<MortgagePoolAgreement>> = [
    {
      label: 'Reference #',
      renderer: c => c.argument.agreementFields.referenceNumber,
      size: '**',
      toSortable: c => c.argument.agreementFields.referenceNumber,
    },
    {
      label: 'CUSIP #',
      renderer: c => c.argument.cusip.text,
      size: '**',
      toSortable: c => c.argument.cusip.text,
    },
    {
      label: 'Details',
      renderer: c => <DetailsCell toggler={this.toggleRowDropDown} cid={c.cid} pairs={details(c)}/>,
      size: '****',
    },
    {
      label: 'Face Value',
      renderer: c => prettyMoney(c.argument.agreementFields.faceValue),
      size: '**',
      toSortable: c => c.argument.agreementFields.faceValue,
    },
    {
      label: {
        key: 'Actions',
        node: <UserContext.Consumer>
          {context => context.logic.role() === Role.Operator ? 'Actions' : ''}
        </UserContext.Consumer>,
      },
      renderer: c => <div>
        <ActionButtons key="actions" choices={[{
          done: { color: theme.colorNotification, icon: 'icon-da-check', message: 'Settled' },
          executor: context => {
            const { operatorRights, delegatedRegistryRights, delegatedSecuritizerRights } = context.partyState!.operator!
            const underlyingMortgagePoolCids = context
              .logic
              .contracts
              .poolsByCusips(c.getUnderlyingCusips())!
              .map(pool => pool.cid)
            return operatorRights.operatorSettleMortgagePoolAgreement({
              delegatedRegistrationRightsCid: delegatedRegistryRights.cid,
              delegatedSecuritizerRightsCid: delegatedSecuritizerRights.cid,
              mortgagePoolAgreementCid: c.cid,
              underlyingMortgagePoolCids,
            })
          },
          name: 'Settle',
          role: Role.Operator,
          styling: 'primary',
        }]}/>
        {NewContractNotification(c.cid)}
      </div>,
      size: '**',
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
            'agreements',
            this.state.searchValue,
            'No agreements yet.'
          )
          return [
            <Header.Header key='0'
              header={"Mortgage Pool Agreements"}
              onSearchChange={this.onSearchChange}
            />,
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

export default function MortgagePoolsAgreements(props: IProps){
  return <UserContext.Consumer>
    {context => <MortgagePoolsAgreementsWithContext {...props} context={context}/>}
  </UserContext.Consumer>
}
