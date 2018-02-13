import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { PageA } from './pages/pageA';
import { PageB } from './pages/pageB';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={PageA} />
      <Route path="/pageB" component={PageB} />
    </Switch>
  </HashRouter>
  , document.getElementById('app')
);
