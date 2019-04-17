import * as React from 'react';
import { css } from 'styled-components'
import styled from 'styled-components';
import Popover from './Popover'
import Truncate from './Truncate'
import { mkDict, getFromDict } from 'src/helpers';

export interface IOption {
  label: React.ReactChild;
  value: string;
}

export interface IProps {
  options: IOption[];
  placeholder?: string;
  currentValue?: string;
  disabled?: boolean;
  minWidth?: string;
  maxWidth?: string;
  underline?: boolean;
  colorChevron?: string;
  colorUnderline?: string;
  colorPlaceholder?: string;
  onChange(value: string, label?: React.ReactChild): void;
}

export interface IState {
  open: boolean,
}

// tslint:disable-next-line:no-any
const DropdownContainer = styled<{minWidth: string, maxWidth?: string}>('ul' as any)`
  min-width: ${({ minWidth }) => minWidth};
  ${({ maxWidth }) => maxWidth ? css`max-width: ${maxWidth}` : ''};
  padding: 0;
  margin: 0;
  display:flex;
  flex-direction:column;
  overflow-y: auto;
  overflow-x:hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const DropdownItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  padding-left: 13px;
  border-left: 6px solid transparent;
  &:hover {
    cursor: pointer;
    border-left: 6px solid ${({ theme }) => theme.colorLightBlue};
    background-color: ${({ theme }) => theme.colorFaded};
    font-weight: 700;
  }
  color: ${({ theme }) => theme.colorDarkBlueText};
  font-size: ${({ theme }) => theme.fontSizeHeaders}
`;
const SelectInput = styled.div<{underline?: boolean, colorUnderline?: string}>`
  display: flex;
  justify-content: space-between;
  border: 0;
  border-bottom:
    ${({underline, colorUnderline}) => underline === false
    ? '0px'
    : '1px ' + (colorUnderline ? colorUnderline : '#fff') + ' solid'
  };
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;
const RightIconDiv = styled.div`
  margin-left: 8px;
  font-size: 10px;
  padding-top: 3px;
`
const ChevronDownIcon = styled.i<{colorChevron?: string}>`
  ${({colorChevron}) => colorChevron
    ? '&:before {color:' + colorChevron + ';}'
    : ''
  }
`
const Placeholder = styled.span<{colorPlaceholder?: string}>`
  font-style: italic;
  ${props => props.colorPlaceholder ? 'color: ' + props.colorPlaceholder + ';' : ''}
`

export default class Select extends React.Component<IProps, IState> {
  private byValue: { [value: string]: IOption }

  constructor(props: IProps) {
    super(props);
    this.state = {
      open: false,
    };
    this.byValue = mkDict(props.options, o => o.value)

  }

  public render() {
    const { placeholder, currentValue, disabled, options, onChange, minWidth,
      maxWidth, underline, colorUnderline, colorChevron, colorPlaceholder } = this.props;

    return (
      <Popover
        position="bottom"
        isOpen={this.state.open}
        arrow={false}
        onInteraction={(type, isOpen) => this.setState({
          open: type === 'content' ? false : !disabled && isOpen})}
        target={(
            <SelectInput
              underline={underline}
              colorUnderline={colorUnderline}
            >
              { currentValue
                ? <Truncate> {getFromDict(currentValue, this.byValue, { value: '', label: currentValue }).label} </Truncate>
                : <Placeholder colorPlaceholder={colorPlaceholder}> {placeholder} </Placeholder>
              }
              <RightIconDiv>
                <ChevronDownIcon
                  className={"icon-da-chevron-down"}
                  colorChevron={colorChevron}
                />
              </RightIconDiv>
            </SelectInput>
        )}
        content={(
          <DropdownContainer minWidth={minWidth || '200px'} maxWidth={maxWidth}>
            {options.map(({label, value}) =>
              (
                <DropdownItem
                  key={value}
                  onClick={() => onChange(value, label)}
                >
                  {label}
                </DropdownItem>
              ))}
          </DropdownContainer>
        )}
      />
    );
  }
}
