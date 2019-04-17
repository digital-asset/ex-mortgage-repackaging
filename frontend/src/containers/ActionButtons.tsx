import * as React from 'react';
import styled from 'styled-components';
import Button, { ButtonStyling } from '../components/Button';
import { IUserStore, Role, UserContext } from '../containers/UserStore';
import { delay, mkDict } from '../helpers';
import theme, { withProps } from '../theme';

const StyledButton = styled(Button)`margin-right: 16px;`
const StyledResult = withProps<{color: string}>(styled.div)`
  font-size: ${props => props.theme.fontSizeHeaders};
  font-weight: 700;
  color: ${props => props.color}
`
const StyledIcon = styled.i`
  font-size: 10px;
  margin-right: 9px;
`

function Result(props: IMessage){
  return <StyledResult color={props.color}>
    <StyledIcon className={props.icon}/>{props.message}
  </StyledResult>
}

export interface IMessage {
  icon: string,
  message: string,
  color: string
}
export interface IChoice {
  name: string,
  done: IMessage,
  executor(context: IUserStore): Promise<any>,
  styling: ButtonStyling,
  role: Role
}
export interface IActionButtons {
  choices: IChoice[]
}
interface IState {
  state: 'before' | 'loading' | 'done' | 'error',
  executedChoiceName?: string
}
export class ActionButtons extends React.Component<IActionButtons, IState>{
  private choiceByName = mkDict(this.props.choices, choice => choice.name)

  public constructor(props: IActionButtons){
    super(props)
    this.state = { state: 'before' }
  }

  public async onClick(choice: IChoice, context: IUserStore){
    this.setState({ state: 'loading' })
    try {
      await choice.executor(context)
      this.setState({ state: 'done', executedChoiceName: choice.name })
      context.logic.contracts.reload(delay(1500))
    } catch {
      this.setState({ state: 'error' })
    }
  }

  public render(){
    return (
      <UserContext.Consumer>
        { context => {
          switch (this.state.state) {
            case 'before':
              return this.props.choices
                .filter( ({ role }) => role === context.logic.role())
                .map(choice =>
                  <StyledButton
                    key={choice.name}
                    styling={choice.styling}
                    onClick={() => this.onClick(choice, context)}>
                    {choice.name}
                  </StyledButton>
                )
            case 'loading': return Result({ message: 'Loading...', color: theme.colorDarkBlueText, icon: '' }) // TODO icon from Jennifer
            case 'error': return Result({ message: 'Error', color: '#F00', icon: 'icon-da-close' }) // TODO color from Jennifer
            case 'done': return Result(this.choiceByName[this.state.executedChoiceName!].done)
          }
        } }
      </UserContext.Consumer>
    )
  }
}
