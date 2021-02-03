import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Dashboard from "views/Dashboard";
import Graphs from "views/Graphs";
import Login from "views/Login";
import Wallet from "views/Wallet";

const ViewWrapper = styled.div`
  background-color: #f8f8f8;
  position: relative;
  left: 0;
  height: 100%;
`;

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledSidebar = styled(Sidebar)`
  position: fixed;
  top: 0;
  left: 0;
`;

function Main() {
  return (
    <ViewWrapper>
      <StyledHeader />
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
      <StyledSidebar />
    </ViewWrapper>
  );
}

export default Main;
