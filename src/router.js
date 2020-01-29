import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Main from "./Main";
import NoMatch from "./pages/nomatch";
import Login from "./pages/login";
import Home from "./pages/home";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings";
import Notifications from "./pages/ui/notifications";
import Messages from "./pages/ui/messages";
import Tabs from "./pages/ui/tabs";

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
                    <Route path="/ui/modals" component={Modals} />
                    <Route path="/ui/loadings" component={Loadings} />
                    <Route path="/ui/notifications" component={Notifications} />
                    <Route path="/ui/messages" component={Messages} />
                    <Route path="/ui/tabs" component={Tabs} />
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
