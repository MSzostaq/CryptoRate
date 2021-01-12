import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const ViewWrapper = styled.div`
  height: 100%;
  position: relative;
`;

const View = styled.div`
  height: 100%;
`;

function Dashboard() {
  <ViewWrapper>
    <View>
      <Switch>
        <Route path="/1">/*wallet view*/ </Route>
      </Switch>
    </View>
    <Sidebar />
  </ViewWrapper>;
}

export default Dashboard;
