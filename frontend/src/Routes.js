import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./auth/pages/Login";
import Home from "./dashboard/pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/dashboard" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
