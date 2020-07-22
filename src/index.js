import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil/dist";
import { Provider as ReduxProvider } from 'react-redux';
import Store from './redux/store';
import RecoilExample from './recoil/example';
import ReduxExample from './redux/example';


ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <RecoilExample />
    </RecoilRoot>
    <ReduxProvider store={Store}>
      <ReduxExample />
    </ReduxProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
