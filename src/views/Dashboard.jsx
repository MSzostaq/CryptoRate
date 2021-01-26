import React from "react";
import styled from "styled-components";
import Card from "components/Card";

const View = styled.div`
  background-color: #f8f8f8;
  position: absolute;
  top: 56px;
  bottom: 24px;
  right: 24px;
  border-radius: 30px;
  width: 88%;
  height: 90%;
`;

const StyledHeading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  padding: 15px;
`;

function Dashboard() {
  return (
    <View>
      <StyledHeading>Dashboard</StyledHeading>
      <Card />
      <Card />
    </View>
  );
}

export default Dashboard;
