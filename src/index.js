import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import UseStateExample from './useStateExample';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/examples/use-state">Example With UseState</Link>
            </li>
            <li>
              <Link to="/examples/use-recoil">Example With UseRecoil</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/examples/use-state">
          <UseStateExample />
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
