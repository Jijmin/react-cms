import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Main from "./Main";
import NoMatch from "./pages/nomatch";
import Login from "./pages/login";
import Home from "./pages/home";
import Buttons from "./pages/ui/buttons";

export default class ERouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <Main>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/ui/buttons" component={Buttons} />
                    <Route component={NoMatch} />
                  </Switch>
                </Main>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
