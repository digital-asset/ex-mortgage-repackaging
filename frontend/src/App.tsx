import * as React from 'react';
import LoginPage from 'src/applets/LoginPage';
import MainFrame from 'src/containers/MainFrame';
import { UserContext } from 'src/containers/UserStore';
import styled from 'styled-components';

const AppContainer = styled.div`
  background: ${props => props.theme.documentBackground};
  width: 100%;
  height: 100%;
  display: flex;
  font-size: ${props => props.theme.fontSizeHeaders};
`

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <UserContext.Consumer>
          {
            userStore => userStore.partyState
              ? <MainFrame/>
              : <LoginPage/>
          }
        </UserContext.Consumer>
      </AppContainer>
    );
  }
}

export default App;
