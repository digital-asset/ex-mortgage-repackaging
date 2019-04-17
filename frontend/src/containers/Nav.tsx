import * as React from 'react';
import styled from 'styled-components';
import { NavButton, INavButton } from './NavButton'
import { Role, UserContext } from "./UserStore";

const TopSpacer = styled.div`
  height: 119px;
  padding: 30px 0 0 ${(props) => props.theme.appMargin};
`
const Logo = styled.i`
  font-size: 2rem;
`

type IButtonLogic = INavButton & { roles: Role[] }

const navButtons: IButtonLogic[] = [{
    name: 'Mortgage Pools',
    roles: [ Role.MortgagePoolHolder, Role.Securitizer ],
    type: 'pools',
  }, {
    name: <div>Mortgage Pool<br/>Agreement Drafts</div>,
    roles: [ Role.MortgagePoolHolder ],
    type: 'drafts',
  }, {
    name: <div>Mortgage Pool<br/>Agreement Proposals</div>,
    roles: [ Role.MortgagePoolHolder, Role.Securitizer ],
    type: 'proposals',
  }, {
    name: <div>Mortgage Pool<br/>Agreements</div>,
    roles: [ Role.MortgagePoolHolder, Role.Securitizer, Role.Operator ],
    type: 'agreements',
  }
]

export const Nav = () => <UserContext.Consumer>
  { context => [
    <TopSpacer key="0">
      <Logo className={"icon-da-whitelogo"}/>
    </TopSpacer>,
    ...navButtons
      .filter(({ roles }) => roles.includes(context.logic.user()!.role))
      .map(({ type, name }) => <NavButton type={type} name={name} key={type}/>)
  ]}
</UserContext.Consumer>
