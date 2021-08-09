import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from ".";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" from={props.location} />
        )
      }
    />
  );
};

export default PrivateRoute;
