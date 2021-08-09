import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./auth/pages/Login";
import Home from "./dashboard/pages/Home";
import PrivateRoute from "./auth/helpers/PrivateRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} exact />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
