import * as React from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
  display: block;
`
const Bar = styled.div`
  height: 55px;
  background: ${props => props.theme.colorLightBlue};
  color: ${props => props.theme.colorBackground};
  display: flex;
  justify-content: flex-end;
`
const Title = styled.div`
  height: 100%;
  padding-left: 17px;
  ${props => props.theme.fontHeaders}
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`
const SearchContainer = styled.div`
  width: 30%;
  background: ${props => props.theme.colorSearchInput};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: text;
`
const Input = styled.input`
  flex-grow: 1;
  min-width: 0;
  margin: 0 17px 0 17px;
  background: ${props => props.theme.colorSearchInput};
  border: 0;
  color: inherit;
  font-size: inherit;
  outline: none;
`
const Icon = styled.i`
  margin-right: 28px;
`
export const HeaderButton = styled.div`
  padding: 0 28px 0 28px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizeButtons};
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colorButtonPrimaryHover};
  }
`

export interface IProps {
  header: string
  onSearchChange(searchValue: string): void
}

export interface IPropsForRouter {
  header: string
  onSearchChange: string
}

export class Header extends React.Component<IProps, {}> {
  private searchInput = React.createRef<HTMLInputElement>();

  public render() {
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/28884
    // workaround: ref={this.searchInput as any}
    return (
      <BarWrapper>
        <Bar>
          <Title>{this.props.header}</Title>
          {this.props.children}
          <SearchContainer onClick={this.focusSearchInput}>
            <Input
              type={"text"}
              ref={this.searchInput as any}
              onChange={event => this.props.onSearchChange(event.currentTarget.value)}
            />
            <Icon className={"icon-da-search"}/>
          </SearchContainer>
        </Bar>
      </BarWrapper>
    )
  }

  private focusSearchInput = () => {
    const node = this.searchInput.current
    if (node) { node.focus() }
  }
}