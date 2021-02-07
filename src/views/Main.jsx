import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "views/Dashboard";
import Graphs from "views/Graphs";
import Wallet from "views/Wallet";
import Header from "components/Header";
import Sidebar from "components/Sidebar";

const ViewWrapper = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
`;

function Main() {
  return (
    <ViewWrapper>
      <Header />
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
        <Redirect to="/dashboard" />
      </Switch>
      <Sidebar />
    </ViewWrapper>
  );
}

export default Main;
