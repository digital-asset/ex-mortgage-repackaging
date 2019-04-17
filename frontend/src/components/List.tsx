import * as React from 'react';
import styled from 'styled-components';
import theme, { withProps } from '../theme';
import * as AbstractList from './AbstractList'

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  table-layout: fixed;
  border-collapse: collapse;
  & tr {
    height: 43px;
  }
  & thead {
    border-bottom: 3px solid ${theme.colorTableBorder};
  }
  & td, & th {
    padding-right: 20px;
    text-align: left;
  }
  & td:last-child, & th:last-child {
    padding-right: 0px;
  }
  & td {
    font-size: ${theme.fontSizeContent};
  }
  & td:nth-child(1) {
    padding-left: 7px;
  }
`
const Row = withProps<{transparent: boolean}>(styled.tbody)`
  ${(props) => props.transparent 
    ? ''
    : `&:nth-child(even) {
        background: ${theme.colorFaded};
      }`
  }
`
export function List<V>(props: AbstractList.IList<V>){
  return <AbstractList.List { ...props }
    components={{ table: Table }}
    rowRenderer={rowProps =>
      <Row key={rowProps.getKey(rowProps.record)} transparent={!!props.transparent}>
        <AbstractList.Row {...rowProps} />
      </Row>
    }
    transitionLeave={false}
  />
}