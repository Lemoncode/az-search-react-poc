import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomePageContainer } from './pages/homePage';
import { SearchPageContainer } from './pages/searchPage';
import { Reboot } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import { theme } from "./app.theme";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Reboot/>
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={HomePageContainer} />
        <Route path="/search" component={SearchPageContainer} />
      </Switch>
    </HashRouter>
  </MuiThemeProvider>
  , document.getElementById('app')
);
