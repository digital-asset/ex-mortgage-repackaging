import * as React from 'react';
import styled from 'styled-components';
import { IThemeInterface, withProps } from '../theme';

export type ButtonStyling = 'primary' | 'secondary' | 'plain';

export const StyledButton = withProps<{styling: ButtonStyling, css?: string}>(styled.button)`
  height: 40px;
  font-size: ${props => props.theme.fontSizeButtons};
  font-weight: 700;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
  ${props => getButtonStylingCss(props.styling, props.theme, props.disabled)}
  ${props => props.css || ''}
`

function getButtonStylingCss(
    styling: ButtonStyling,
    theme: IThemeInterface,
    disabled: boolean | undefined,
){
  switch(styling) {
    case 'plain': return `
      color: ${theme.colorButtonPrimaryDefault};
      font-size: ${theme.fontSizeContent};
      background: transparent;
      border: none;
    `
    case 'primary':
      return `
        width: 89px;
        border-radius: 21px;
        color: ${theme.colorBackground};
        background: ${theme.colorButtonPrimaryDefault};
        border: none;
      ` + (
      disabled ?
        `&:disabled {
          background: ${theme.colorButtonPrimaryDisabled};
        }`
      : `&:hover {
          background: ${theme.colorButtonPrimaryHover};
        }`
      ) + `
        &:active {
          height: 38px;
          border: 1px solid ${theme.colorBackground};
          box-shadow: 0 0 0 1px ${theme.colorButtonPrimaryDefault};
          background: ${theme.colorButtonPrimaryDefault};
        }
      `;
    case 'secondary': return `
      width: 89px;
      border-radius: 21px;
      color: ${theme.colorDarkBlueText};
      background: ${theme.colorBackground};
      border: 1px solid ${theme.colorDarkBlueText};
      ` + (
      disabled ?
        `&:disabled {
          color: ${theme.colorButtonSecondaryDisabled};
          border: 1px solid ${theme.colorButtonSecondaryDisabled};
        }`
      : `&:hover {
          background: ${theme.colorButtonSecondaryHover};
        }`
      ) + `
        &:active {
          background: ${theme.colorBackground};
          border: 2px solid ${theme.colorDarkBlueText};
        }
      `;
    default:
      return '';
  }
}

export interface IProps {
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
  styling: ButtonStyling;
  disabled?: boolean;
  css?: string;
}

export default class Button extends React.Component<IProps, {}> {
  public render() {
    return (
      <StyledButton {...this.props}>
        {this.props.children}
      </StyledButton>
    );
  }
}