import * as React from 'react';
import { IUserStore, UserContext } from 'src/containers/UserStore';
import { MortgagePool } from 'src/contracts/MortgagePool/MortgagePool';
import { IHeader } from '../components/AbstractList'
import { List } from '../components/List'
import { ContentContainer } from '../containers/Content';
import * as Header from '../containers/Header';
import { prettyDate, prettyMoney } from '../contracts/helpers'
import { Lock, titleRenderer, NewContractNotification } from './helpers'

interface IProps {
  header: Header.IProps
}

interface IState {
  searchValue: string | undefined,
  records: MortgagePool[]
}

class MortgagePoolsWithContext extends React.Component<IProps & { context: IUserStore }, IState> {
  constructor(props: IProps & { context: IUserStore }){
    super(props)
    this.state = { searchValue: undefined, records: [] }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  public onSearchChange(searchValue: string) { this.setState({ searchValue }) }

  private headers: Array<IHeader<MortgagePool>> = [
    {
      label: 'CUSIP #',
      renderer: c => c.argument.mortgagePoolFields.cusip.text,
      size: '**',
      toSortable: c => c.argument.mortgagePoolFields.cusip.text,
    },
    {
      label: 'Pool Type',
      renderer: c => c.argument.mortgagePoolFields.poolType.constructor,
      size: '*',
      toSortable: c => c.argument.mortgagePoolFields.poolType.constructor,
    },
    {
      label: 'Pass-through Rate',
      renderer: c => `${c.argument.mortgagePoolFields.passThroughRate}%`,
      size: '*',
      toSortable: c => c.argument.mortgagePoolFields.passThroughRate,
    },
    {
      label: 'Issue Date',
      renderer: c => titleRenderer(prettyDate(c.argument.mortgagePoolFields.issueDate)),
      size: '*',
      toSortable: c => c.argument.mortgagePoolFields.issueDate,
    },
    {
      label: 'Maturity',
      renderer: c => titleRenderer(prettyDate(c.argument.mortgagePoolFields.lastLoanMaturity)),
      size: '*',
      toSortable: c => c.argument.mortgagePoolFields.lastLoanMaturity,
    },
    {
      label: 'Original Face Value',
      renderer: c => prettyMoney(c.argument.mortgagePoolFields.originalFaceValue),
      size: '**',
      toSortable: c => c.argument.mortgagePoolFields.originalFaceValue,
    },
    {
      label: 'Current Face Value',
      renderer: c => prettyMoney(c.argument.mortgagePoolFields.currentFaceValue),
      size: '**',
      toSortable: c => c.argument.mortgagePoolFields.currentFaceValue,
    },
    {
      cellFontSize: '19px',
      label: 'Lock Status',
      renderer: c => Lock(c.argument.isLocked),
      size: '*',
      toSortable: c => c.argument.isLocked,
    },
    {
      label: { node: '', key: 'isNew'},
      renderer: c => NewContractNotification(c.cid),
      size: '*',
    }
  ]

  public render() {
    return (
      <UserContext.Consumer>
        { context => {
          const records = context.logic.contracts.searchForComponent(
            'pools',
            this.state.searchValue,
            'No mortgage pools yet.'
          )

          return [
            <Header.Header key='0'
              header={"Mortgage Pools"}
              onSearchChange={this.onSearchChange}
            />,
            <ContentContainer key='1'>
              <List recordsOrMessage={records} headers={this.headers} getKey={contract => contract.cid}/>
            </ContentContainer>
          ]
        }
      }
      </UserContext.Consumer>
    )
  }
}

export default function MortgagePools(props: IProps){
  return <UserContext.Consumer>
    {context => <MortgagePoolsWithContext {...props} context={context}/>}
  </UserContext.Consumer>
}
