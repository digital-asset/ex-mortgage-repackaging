import { Contract } from '@da/da-grpc';
import * as React from 'react';
import * as AbstractList from 'src/components/AbstractList';
import AllocationsList from 'src/containers/AllocationsList';
import { IWithUnderlyingCusips } from 'src/contracts/MortgagePool/helpers';
import styled from 'styled-components';
import theme, { withProps } from '../theme';
import { UserContext } from './UserStore';

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  table-layout: fixed;
  border-collapse: collapse;
  ${AbstractList.fadeOut.css}
`
const Thead = styled.thead`
  border-bottom: 3px solid ${theme.colorTableBorder};
  tr {
    height: 43px;
  }`
// multiple <tbody> per table; tbody = row + dropdown
const Tbody = styled.tbody`
  &:nth-child(even) {
    background: ${theme.colorFaded};
  }`
const Td = withProps<{}>(styled.td)`
  padding-right: 20px;
  text-align: left;
  font-size: ${theme.fontSizeContent};
  vertical-align: top;
  padding: 12px 0 12px 0;
  &:last-child {
    padding-right: 0px;
  }
  &:nth-child(1) {
    padding-left: 7px;
  }`
const TdDropdown = styled.td`
  padding: 0 7px 16px 7px;`

export interface IListDropDown<V> extends AbstractList.IList<V> {
  showDropdownByCid: {[cid: string]: boolean},
}

function Cell(props: {colSpan: number, cusips: string[], show?: boolean}){
  return <tr style={props.show ? {} : { display: 'none' }}>
    <TdDropdown colSpan={props.colSpan}>
      <UserContext.Consumer>
        { context => <AllocationsList
          allocations={context.logic.contracts.poolsByCusips(props.cusips)!}
        /> }
      </UserContext.Consumer>
    </TdDropdown>
  </tr>
}

export class ListDropDown<V extends Contract<object> & IWithUnderlyingCusips>
extends React.Component<IListDropDown<V>, {}> {

  public render() {
    const rowRenderer = (rowProps: AbstractList.IRowWithRecord<V>) =>
      <Tbody key={rowProps.getKey(rowProps.record)}>
        <AbstractList.Row {...rowProps} />
        <Cell
          colSpan={this.props.headers.length}
          cusips={rowProps.record.getUnderlyingCusips()!}
          show={this.props.showDropdownByCid[rowProps.record.cid]}
        />
      </Tbody>

    return <AbstractList.List { ...this.props }
      components={{ table: Table, td: Td, thead: Thead }}
      rowRenderer={rowRenderer}
      transitionLeave={true}
    />
  }
}