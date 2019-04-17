// Load global styles
import './styles/base.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import UserStore, { daGrpcPromise } from './containers/UserStore';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme';

const AppWithUserStoreAndRouter = withRouter(({ history }) =>
  <UserStore daGrpcPromise={daGrpcPromise} history={history}>
    <App />
  </UserStore>
)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppWithUserStoreAndRouter/>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
