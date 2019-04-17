import * as React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Label = styled.span`
  font-weight: 700;
  line-height: 22px;
`
const Toggle = styled.div`
  font-weight: 700;
  margin-top: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
const ToggleIcon = styled.i`
  font-size: 11px;
  margin-right: 8px;
`

interface IProps {
  toggler(cid: string): void,
  cid: string,
  pairs: Array<{ label: string, value: string }>,
}

interface IState {
  isOpen: boolean
}

export default class DetailsCell extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = { isOpen: false };
    this.onClick = this.onClick.bind(this);
  }

  public onClick() {
    this.setState(
      { isOpen: !this.state.isOpen },
      () => this.props.toggler(this.props.cid),
    );
  }

  public render() {
    return (
      <DetailsContainer>
        {
          this.props.pairs.map(({ label, value }, i) =>
            <span key={i}><Label>{label}:</Label> {value}</span>
          )
        }
        <Toggle onClick={this.onClick}>
          <ToggleIcon className={this.state.isOpen ? 'icon-da-caret-down': 'icon-da-caret-right'}/>
          View Allocations
        </Toggle>
      </DetailsContainer>
    );
  }
}
