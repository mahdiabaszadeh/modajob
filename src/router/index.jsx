/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "../views/Web";
import Dashboard from "../views/Dashboard";
import PrivateRout from "./PrivateRout";
import PublicRoute from "./PublicRoute";
import Login from "../views/Login";

export const history = createBrowserHistory();

const Routing = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={HomePage} exact={true} />
          <PrivateRout path="/panel" component={Dashboard} exact={true} />
          <PublicRoute path="/login" component={Login} exact={true} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routing;
