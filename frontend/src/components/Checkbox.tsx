import * as React from 'react';

export interface IProps {
  value: boolean,
  onChange(value: boolean): void,
  label: React.ReactChild
}

export class Checkbox extends React.Component<IProps, { value: boolean }> {
  public state = { value: this.props.value }

  public render(){
    return <div
      onClick={() => {
        const value = !this.state.value
        this.setState({ value }, () => this.props.onChange(value))
      }}
    >
      <i
        className={this.state.value
          ? 'icon-da-checkbox-selected'
          : 'icon-da-checkbox-default'
        }
        style={{marginRight: '9px', position: 'relative', top: '2px'}}
      ><span className='path1'/><span className='path2'/></i>
      {this.props.label}
    </div>
  }
}