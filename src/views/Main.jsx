import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "components/Sidebar";
import Dashboard from "views/Dashboard";
import Graphs from "views/Graphs";
import Wallet from "views/Wallet";

const ViewWrapper = styled.div`
  padding-left: 180px;
  position: relative;
  height: 100%;
`;

const StyledSidebar = styled(Sidebar)`
  position: absolute;
  top: 0;
  left: 0;
`;

function Main() {
  return (
    <ViewWrapper>
      <StyledSidebar />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/wallet">
          <Wallet />
        </Route>
        <Route path="/graphs">
          <Graphs />
        </Route>
      </Switch>
    </ViewWrapper>
  );
}

export default Main;
