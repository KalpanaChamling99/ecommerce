import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { isLoggedIn } from "../utils";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default withRouter(ProtectedRoute);
