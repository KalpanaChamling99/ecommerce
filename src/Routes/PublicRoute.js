import React from "react";
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { isLoggedIn } from "../utils";

function PublicRoute(props) {
  const { component: Component, restricted = false, ...rest } = props;

  const render = props => {
    if (isLoggedIn() && restricted) {
      return <Redirect to='/' />;
    }

    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
}

export default PublicRoute;
