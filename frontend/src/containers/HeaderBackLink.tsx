import { LocationDescriptor } from 'history';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Bar = styled.div`
  height: 55px;
  background: ${props => props.theme.colorLightBlue};
  ${(props) => props.theme.fontHeaders}
  &:hover {
    background: ${props => props.theme.colorButtonPrimaryHover};
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  height: 100%;
  width: 100%;
  padding-left: 17px;
  line-height: 55px;
`
const IconWrapper = styled.div`
  transform: rotate(90deg);
  display: inline-block;
`
const Icon = styled.i`
  font-size: 8px;
`
const Label = styled.span`
  margin-left: 5px
`

export interface IProps {
  to: LocationDescriptor,
  label: string,
}

export default class HeaderBackLink extends React.Component<IProps> {
  public render() {
    return (
      <Bar>
        <StyledLink to={this.props.to}>
          <IconWrapper>
            <Icon className='icon-da-chevron-down'/>
          </IconWrapper>
          <Label>{this.props.label}</Label>
        </StyledLink>
      </Bar>
    )
  }
}
