import { History } from 'history';
import * as React from 'react';
import { withRouter } from "react-router-dom";
import Select, { IOption, IProps as ISelectProps} from 'src/components/Select';
import { IUserStore, userByParty, UserContext, users } from 'src/containers/UserStore';
import styled from 'styled-components';

const Content = styled.div`
  padding: 45px 0 0 70px;
  height: 100%;
  float: left;
`
const Logo = styled.i`
  font-size: 50px;
`
const LogInHeader = styled.div`
  margin: 215px 0 24px 0;
  font-size: ${(props) => props.theme.fontSizeHeadersLarge};
  font-family: OpenSans, Karla, sans-serif;
`
const LogInSelectContainer = styled.div`
  width: 278px;
  height: 27px;
`

interface IProps {
  context: IUserStore,
  history: History,
}

class LoginPageWithContext extends React.Component<IProps, ISelectProps> {
  public options: IOption[] = users.map(user => ({ label: user.name, value: user.party }))

  constructor(props: IProps) {
    super(props);
    this.state = {
      minWidth: '278px',
      onChange: (party: string) => {
        const logic = this.props.context.logic
        logic
          .setParty(party)
          .then( () => logic.contracts.goToContractsList(
            userByParty[party].initContractsListType
          ))
      },
      options: this.options,
      placeholder: 'Choose party...',
    };
  }

  public render() {
    return (
      <Content>
        <Logo className={"icon-da-whitelogo"}/>
        <LogInHeader>LOG IN</LogInHeader>
        <LogInSelectContainer>
          <Select {...this.state} />
        </LogInSelectContainer>
      </Content>
    );
  }
}


const LoginPage = withRouter(({history}) =>
  <UserContext.Consumer>
    {context =>
      <LoginPageWithContext context={context} history={history}/>
    }
  </UserContext.Consumer>
)

export default LoginPage;
