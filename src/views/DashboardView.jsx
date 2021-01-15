import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "components/Sidebar";
import GraphsView from "views/GraphsView";
import WalletView from "views/WalletView";

const ViewWrapper = styled.div`
  height: 100%;
  position: relative;
`;

function DashboardView() {
  return (
    <ViewWrapper>
      <Switch>
        <Route path="/dashboard" />
        <Route path="/wallet">
          <WalletView />
        </Route>
        <Route path="/graphs">
          <GraphsView />
        </Route>
      </Switch>
      <Sidebar />
    </ViewWrapper>
  );
}

export default DashboardView;
