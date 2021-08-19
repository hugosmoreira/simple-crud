import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Create from "./Create";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/create" exact component={Create}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
