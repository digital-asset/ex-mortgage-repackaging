import * as React from 'react';
import styled from 'styled-components';
import { withProps } from '../theme';
import { UserContext, IContractsState } from './UserStore'
import { isActiveRoute } from 'src/routes';
import { withRouter } from 'react-router';

const StyledNavLink = withProps<{ greenNotifications: boolean }>(styled.span)`
  cursor: pointer;
  padding: 16px 16px 16px ${(props) => props.theme.appMargin};
  ${props => props.theme.fontHeaders}
  display: flex;
  justify-content: space-between;
  color: inherit;
  text-decoration: none;
  .notif {
    background: ${props =>
      props.greenNotifications
      ? props.theme.colorNotification
      : props.theme.colorDarkBlueText
    };
  }
  &.active {
    background: ${props => props.theme.colorDarkBlueText};
    .notif {
      background: ${props =>
        props.greenNotifications
        ? props.theme.colorNotification
        : props.theme.colorDarkBlue300
      };
    }
  }
  &:hover {
    background: ${props => props.theme.colorButtonPrimaryHover};
  }
`
const NotificationCircle = styled.div<{show: boolean}>`
  ${props => props.show ? '' : 'visibility: hidden;'}
  border-radius: 50%;
  height: 27px;
  min-width: 27px;
  font-size: ${props => props.theme.fontSizeNotifiactions};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export interface INavButton {
  name: React.ReactChild,
  type: keyof IContractsState,
}

export function NavButton(props: INavButton){
  return <UserContext.Consumer>
    { context => {
      const allContracts = context.logic.contracts.byType(props.type) || []
      const newContracts = allContracts.filter(context.logic.contracts.isNew)
      const greenNotifications = newContracts.length > 0
      const count = greenNotifications ? newContracts.length : allContracts.length
      const WR = withRouter(({ location }) =>
        <StyledNavLink
          greenNotifications={greenNotifications}
          onClick={() => context.logic.contracts.goToContractsList(props.type)}
          key={props.type}
          className={isActiveRoute(location, props.type) ? 'active' : ''}
        >
          <Label>{props.name}</Label>
          <NotificationCircle
            className={'notif'}
            show={count > 0}
          >
            {count}
          </NotificationCircle>
      </StyledNavLink> )

      return <WR/>
    } }
  </UserContext.Consumer>
}