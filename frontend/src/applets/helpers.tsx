import * as React from 'react';
import { UserContext, IPartyState } from 'src/containers/UserStore';
import theme from '../theme';

export interface IWithPartyState {
  children: (context: IPartyState) => React.ReactNode,
  onUndefined?: () => React.ReactNode
}

export function WithPartyState({ children, onUndefined }: IWithPartyState) {
  return <UserContext.Consumer>
    { context => context.partyState
      ? children(context.partyState)
      : onUndefined ? onUndefined() : ''
    }
  </UserContext.Consumer>
}

const NewP = <span style={{
  color: theme.colorNotification,
  fontSize: theme.fontSizeHeaders,
  fontWeight: 700
}}>New</span>

export function NewContractNotification(cid: string) {
  return <WithPartyState>
    { partyState => partyState.generated.currentlyShownCids.has(cid) ? NewP : '' }
  </WithPartyState>
}

export function Lock(isLocked: boolean){
  return <i className={ isLocked ? "icon-da-locked" : "icon-da-unlocked"} />
}

export function titleRenderer(text: string) {
  return <span title={text}>{text}</span>
}
