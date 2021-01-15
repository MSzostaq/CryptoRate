import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "components/Sidebar";
import Graphs from "views/Graphs";
import Wallet from "views/Wallet";

const ViewWrapper = styled.div`
  height: 100%;
  position: relative;
`;

const View = styled.div`
  height: 100%;
`;

function Dashboard() {
  return (
    <ViewWrapper>
      <View>
        <Switch>
          <Route path="/graphs">
            <Graphs />
          </Route>
          <Route path="/wallet">
            <Wallet />
          </Route>
          <Redirect to="graphs" />
        </Switch>
      </View>
      <Sidebar />
    </ViewWrapper>
  );
}

export default Dashboard;
