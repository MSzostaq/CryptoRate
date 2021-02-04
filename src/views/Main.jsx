import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "views/Dashboard";
import Graphs from "views/Graphs";
import Login from "views/Login";
import Wallet from "views/Wallet";

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
        <Route path="/login">
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </ViewWrapper>
  );
}

export default Main;
