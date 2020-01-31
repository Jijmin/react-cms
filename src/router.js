import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Main from "./Main";
import Common from "./common";
import NoMatch from "./pages/nomatch";
import Login from "./pages/login";
import Home from "./pages/home";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings";
import Notifications from "./pages/ui/notifications";
import Messages from "./pages/ui/messages";
import Tabs from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousel from "./pages/ui/carousel";
import FormLogin from "./pages/form/login";
import FormRegister from "./pages/form/register";
import TableBasic from "./pages/table/basic";
import TableHigh from "./pages/table/high";
import Rich from "./pages/rich";
import City from "./pages/city";
import Order from "./pages/order";
import OrderDetail from "./pages/order/detail";
import User from "./pages/user";
import BikeMap from "./pages/map/bikeMap";
import ChartsBar from "./pages/charts/bar";
import ChartsLine from "./pages/charts/line";
import ChartsPie from "./pages/charts/pie";
import Permission from "./pages/permission";

export default class ERouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/common"
              render={() => (
                <Common>
                  <Route
                    path="/common/order/detail/:orderId"
                    component={OrderDetail}
                  />
                </Common>
              )}
            />
            <Route
              path="/"
              render={() => (
                <Main>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/ui/buttons" component={Buttons} />
                    <Route path="/ui/modals" component={Modals} />
                    <Route path="/ui/loadings" component={Loadings} />
                    <Route path="/ui/notification" component={Notifications} />
                    <Route path="/ui/messages" component={Messages} />
                    <Route path="/ui/tabs" component={Tabs} />
                    <Route path="/ui/gallery" component={Gallery} />
                    <Route path="/ui/carousel" component={Carousel} />
                    <Route path="/form/login" component={FormLogin} />
                    <Route path="/form/register" component={FormRegister} />
                    <Route path="/table/basic" component={TableBasic} />
                    <Route path="/table/high" component={TableHigh} />
                    <Route path="/rich" component={Rich} />
                    <Route path="/city" component={City} />
                    <Route path="/order" component={Order} />
                    <Route path="/user" component={User} />
                    <Route path="/bikeMap" component={BikeMap} />
                    <Route path="/charts/bar" component={ChartsBar} />
                    <Route path="/charts/pie" component={ChartsPie} />
                    <Route path="/charts/line" component={ChartsLine} />
                    <Route path="/Permission" component={Permission} />
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
