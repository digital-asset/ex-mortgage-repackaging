import * as React from 'react';
import * as Button from './Button'

export interface IProps {
  onClick(): Promise<void>;
  styling: Button.ButtonStyling;
  disabled?: boolean;
  done?: React.ReactChild,
  loading?: React.ReactChild,
  error?: React.ReactChild,
  css?: string,
}
interface IState { state: 'before' | 'loading' | 'done' | 'error' }
export class WaitingButton extends React.Component<IProps, IState>{
  public state: IState = { state: 'before' }
  public render(){
    switch (this.state.state){
      case 'before': return <Button.default
          styling={this.props.styling}
          onClick={() => this.setState(
            { state: 'loading'},
            () => this.props.onClick()
              .then(() => this.setState({ state: 'done' }))
              .catch(() => this.setState({ state: 'error' }))
          )}
          disabled={this.props.disabled}
          children={this.props.children}
          css={this.props.css}
        />
      case 'loading': return this.props.loading || 'Loading...'
      case 'error': return this.props.error || 'Error'
      case 'done': return this.props.done || ''
    }
  }
}