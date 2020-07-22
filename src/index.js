import React, {StrictMode, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { RecoilRoot } from "recoil/dist";
import { Provider as ReduxProvider } from 'react-redux';
import Store from './redux/store';
import RecoilExample from './recoil/example';
import RecoilExample2 from './recoil/example2';
import ReduxExample from './redux/example';

import {
  Nav
} from "./components";

import './styles/reset.scss';
import './index.scss';


ReactDOM.render(
  <StrictMode>

    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Suspense fallback={<div>Loading</div>}>
            <RecoilRoot>
              <RecoilExample2 />
            </RecoilRoot>
          </Suspense>
        </Route>
        <Route path='/examples/recoil-redux'>
          <RecoilRoot>
            <RecoilExample />
          </RecoilRoot>
          <ReduxProvider store={Store}>
            <ReduxExample />
          </ReduxProvider>
        </Route>
      </Switch>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
