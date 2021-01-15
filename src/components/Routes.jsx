import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import DashboardView from "views/DashboardView";

function Routes() {
  return (
    <Router>
      <Route path="/">
        <DashboardView />
      </Route>
    </Router>
  );
}

export default Routes;
