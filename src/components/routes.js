import React from "react";
import { Switch, Route } from "react-router-dom";
import Braves from "./Braves";
import Jazz from "./Jazz";
import Lakers from "./Lakers";
import Home from "./Home";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Braves} path="/braves" />
    <Route component={Lakers} path="/lakers" />
    <Route component={Jazz} path="/jazz" />
  </Switch>
);
