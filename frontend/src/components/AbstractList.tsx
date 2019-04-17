import * as React from 'react';
import { AutoSizer } from 'react-virtualized';
import Truncate from 'src/components/Truncate'
import styled from 'styled-components';
import theme, { withProps } from '../theme';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Arrow } from './Arrow';

export const fadeOut = (() => {
  const timeout = 1500
  return {
    css: `
      .fade-leave {
        opacity: 1;
      }
      .fade-leave.fade-leave-active {
        opacity: 0.01;
        transition: opacity ${timeout}ms;
      }
    `,
    timeout
  }
})()

export type ILabel = string | { key: string, node: React.ReactChild }

export interface IHeader<V> {
  label: ILabel,
  renderer(_: V): React.ReactChild,
  size: string,
  cellFontSize?: string,
  toSortable?(_: V): any
}

export function keyFromLabel(label: ILabel): string {
  return typeof label === 'string'
    ? label
    : label.key
}

export interface IRow<V> {
  getKey(v: V): string,
  headers: Array<IHeader<V>>
}

export type IRowWithRecord<V> = IRow<V> & {
  record: V,
  tr?: React.ReactType,
  td?: React.ReactType
}

export type IList<V> = IRow<V> & {
  recordsOrMessage: V[] | string,
  transparent?: boolean,
}

export type IListWithComponents<V> = IList<V> & {
  rowRenderer?(props: IRowWithRecord<V>): React.ReactChild,
  components: {
    table?: React.ReactType,
    tbody?: React.ReactType,
    td?: React.ReactType,
    th?: React.ReactType,
    thead?: React.ReactType,
    tr?: React.ReactType,
  },
  transitionLeave: boolean
}

export const EmptyMessage = withProps<{width: number}>(styled.div)`
  width: ${props => props.width.toString()}px;
  margin-top: 18px;
  font-size: ${theme.fontSizeHeaders};
  color: ${theme.colorTableEmptyText};
  font-style: italic;
`

interface ISort {
  colNo: number,
  direction: boolean // true: asc, false: desc
}

export interface ICell<V> {
  cellFontSize?: string,
  key: string,
  record: V,
  renderer: (_: V) => React.ReactChild,
  td?: React.ReactType
}

export function Cell<V>(props: ICell<V>) {
  const Td = props.td || styled.td``
  return <Td
    style={props.cellFontSize ? { fontSize: props.cellFontSize } : {}}
  >
    <Truncate>{props.renderer(props.record)}</Truncate>
  </Td>
}

export function Row<V>(props: IRowWithRecord<V>){
  const key = props.getKey(props.record)
  const Tr = props.tr || styled.tr``
  return <Tr key={key}>
    {props.headers.map(({renderer, cellFontSize, label}) =>
      <Cell
        key={keyFromLabel(label)}
        cellFontSize={cellFontSize}
        renderer={renderer}
        record={props.record}
        td={props.td || styled.td``}
      />
    )}
  </Tr>
}

export class List<V> extends React.Component<IListWithComponents<V>, ISort> {
  constructor(props: IListWithComponents<V>){
    super(props)
    this.state = { colNo: 0, direction: true }
    this.compare = this.compare.bind(this)
  }

  private header({ colWidth, colNo, isLast, gutterSizePx, header }: {
    colNo: number,
    colWidth: number,
    isLast: boolean,
    gutterSizePx: number,
    header: IHeader<V>
  }) {
    const width = colWidth * header.size.length - (isLast ? gutterSizePx : 0);
    const Th = this.props.components.th || styled.th`
      font-size: ${theme.fontSizeHeaders};
      font-weight: 700;
      cursor: pointer;
      text-align: left;
      width: ${width.toString()}px;
    `
    const arrow = header.toSortable
      ? <Arrow direction={colNo === this.state.colNo ? this.state.direction : undefined}/>
      : null
    const node = typeof header.label === 'string' ? header.label : header.label.node
    const key = keyFromLabel(header.label)
    return <Th
        key={key}
        title={key}
        onClick={() => this.setState(prevState => ({
          colNo,
          direction: prevState.colNo === colNo ? !prevState.direction : true,
        }))}
      >
      <div style={{display: 'flex'}}>
        <Truncate>{node}</Truncate>
        {arrow}
      </div>
    </Th>
  }

  private compare(a: V, b: V): number {
    const f = this.props.headers[this.state.colNo].toSortable
    if (f) {
      const one = this.state.direction ? 1 : -1
      const fa = f(a)
      const fb = f(b)
      return fa === fb
        ? 0
        : fa < fb
          ? one
          : -one
    } else {
      return 0
    }
  }

  public renderRecords(records: V[]){
    const rowRenderer = this.props.rowRenderer || Row
    return records
      .sort(this.compare)
      .map(record => rowRenderer({
          getKey: this.props.getKey,
          headers: this.props.headers,
          record,
          td: this.props.components.td,
          tr: this.props.components.tr,
        })
      )
  }

  public render() {
    const Table = this.props.components.table || styled.table``
    const Thead = this.props.components.thead || styled.thead``
    const Tr = this.props.components.tr || styled.tr``

    const columnsNum = 12;
    const gutterSizePx = 20;
    const calculateColWidth = (totalWidth: number) =>
      (totalWidth + gutterSizePx) / columnsNum;
    const headers = this.props.headers
    const { records, msg } = typeof this.props.recordsOrMessage === 'string'
      ? { records: [] as V[], msg: this.props.recordsOrMessage }
      : { records: this.props.recordsOrMessage, msg: undefined }

    return (
      <AutoSizer disableHeight={true}>
        {({ width }) => {
            const colWidth = calculateColWidth(width);
            return(
              <div>
                <ReactCSSTransitionGroup
                  component={Table}
                  transitionName="fade"
                  transitionEnter={false}
                  transitionLeave={this.props.transitionLeave}
                  transitionLeaveTimeout={fadeOut.timeout}>
                  {[
                    <Thead key='head'>
                      <Tr>
                        {
                          headers.map((header, index) =>
                            this.header({
                              colNo: index,
                              colWidth,
                              gutterSizePx,
                              header,
                              isLast: index === headers.length - 1,
                            })
                          )
                        }
                      </Tr>
                    </Thead>,
                    ...this.renderRecords(records)
                  ]}
                </ReactCSSTransitionGroup>
                { msg && <EmptyMessage width={width}>{msg}</EmptyMessage> }
              </div>
            )
          }
        }
      </AutoSizer>
    )
  }
}
