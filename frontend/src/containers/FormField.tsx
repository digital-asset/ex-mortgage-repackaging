import * as React from 'react';
import Select, { IOption } from 'src/components/Select';
import theme, { withProps } from 'src/theme';
import styled from 'styled-components';

const Container = withProps<{active: boolean}>(styled.div)`
  display: inline-block;
  height: 74px;
  width: 182px;
  padding: 16px 0 0 16px;
  margin-right: 20px;
  ${props => props.active ? '' : 'background: ' + props.theme.colorFaded + ';'}
  border-left: ${props => props.active
    ? '1px solid ' + props.theme.colorButtonPrimaryDisabled + ';'
    : '3px solid ' + props.theme.colorDarkBlueText + ';'
  }
  ${props => props.active ? '' : 'cursor: not-allowed;'}
`
const Title = styled.div`
  font-size: ${props => props.theme.fontSizeHeaders};
  font-weight: 700;
  margin-bottom: 10px;
`

export interface IProps {
  onChangeOrValue: string | ((value: string) => void),
  options?: IOption[],
  title: string,
}

export class FormField extends React.Component<IProps, { currentValue: string }>{
  constructor(props: IProps){
    super(props)
    this.state = {
      currentValue: typeof props.onChangeOrValue === 'string'
        ? props.onChangeOrValue
        : ''
    }
  }
  public render(){
    const { onChangeOrValue, options, title } = this.props
    const active = typeof onChangeOrValue !== "string"
    return (
      <Container active={active}>
        <Title>{title}</Title>
        <div style={{width: '158px', height: '32px'}}>
          {
            typeof onChangeOrValue === "string"
              ? onChangeOrValue
              : <Select
                  currentValue={this.state.currentValue}
                  onChange={currentValue => { this.setState({ currentValue }); onChangeOrValue(currentValue) }}
                  placeholder='Select'
                  options={options || []}
                  minWidth='158px'
                  colorPlaceholder={theme.colorFormFieldPlaceholder}
                  colorChevron={theme.colorFormFieldPlaceholder}
                  colorUnderline={theme.colorFormFieldUnderline}
                />
          }
        </div>
      </Container>
    );
  }
}

export function FormFields(fields: IProps[]): JSX.Element {
  return <div key='FormFields'>{fields.map(f => <FormField key={f.title} {...f}/>)}</div>
}
