import React from "react";
import styled from "styled-components";
import Card from "components/Card";

const View = styled.div`
  background-color: #f8f8f8;
  display: grid;
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
  height: 100px;
  padding: 15px;
`;

const Heading = styled(Card)`
  width: 1fr;
  height: 64px;
`;

const MidWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  height: 260px;
`;

const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.5fr 0.5fr;
  height: 200px;
`;

function Dashboard() {
  return (
    <View>
      <StyledHeading>Dashboard</StyledHeading>
      <Heading />
      <MidWrapper>
        <Card />
        <Card />
      </MidWrapper>
      <BottomWrapper>
        <Card />
        <Card />
        <Card />
      </BottomWrapper>
    </View>
  );
}

export default Dashboard;
