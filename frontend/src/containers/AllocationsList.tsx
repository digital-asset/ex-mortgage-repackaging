import * as React from 'react';
import { titleRenderer } from 'src/applets/helpers';
import { IHeader } from 'src/components/AbstractList'
import { List } from 'src/components/List';
import { MortgagePool } from 'src/contracts/MortgagePool/MortgagePool';
import { prettyDate, prettyMoney } from '../contracts/helpers'

const headers: Array<IHeader<MortgagePool>> = [
  {
    label: 'Pool Type',
    renderer: c => c.argument.mortgagePoolFields.poolType.constructor,
    size: '**',
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
    toSortable: c => c.argument.mortgagePoolFields.issueDate
  },
  {
    label: 'Maturity',
    renderer: c => titleRenderer(prettyDate(c.argument.mortgagePoolFields.lastLoanMaturity)),
    size: '**',
    toSortable: c => c.argument.mortgagePoolFields.lastLoanMaturity
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
]

export default function Show(props: { allocations: MortgagePool[], cusipColumn?: IHeader<MortgagePool> }){
  const cusipColumn: IHeader<MortgagePool>
    = props.cusipColumn
    || {
      label: 'CUSIP #',
      renderer: c => c.argument.mortgagePoolFields.cusip.text,
      size: '**',
      toSortable: c => c.argument.mortgagePoolFields.cusip.text,
    }

  return <List
    headers={[cusipColumn, ...headers]}
    recordsOrMessage={props.allocations.length === 0 ? 'No allocations yet.' : props.allocations}
    transparent={true}
    getKey={(contract: MortgagePool) => contract.cid}
  />
}
