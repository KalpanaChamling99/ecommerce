import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./OAuth/ProtectedRoute";
import PageNotFound from "./PageNotFound";
import Header from "./Header";

function Home(props) {
  return (
    <>
      <Header />
      <Switch>
        <ProtectedRoute exact path="/dashboard" />
        <Route path={"*"} component={PageNotFound} />
      </Switch>
    </>
  );
}

export default Home;
