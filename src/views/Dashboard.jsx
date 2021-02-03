import React from "react";
import styled from "styled-components";
import Card from "components/Card";

const View = styled.div`
  background-color: #f8f8f8;
  display: grid;
  position: fixed;
  top: 64px;
  bottom: 0;
  right: 0;
  left: 64px;
  @media (max-width: 800px) {
    position: fixed;
    left: 0;
`;

const StyledHeading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  height: 100px;
  padding: 15px;

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
  }
`;

const Heading = styled(Card)`
  width: 1fr;
  height: 64px;

  @media (max-width: 1250px) {
    width: 0%;
    height: 0%;
  }
`;

const MidWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  height: 260px;

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    height: 320px;
    position: fixed;
    left: 0;
    top: 160px;
    width: 100%;
  }
`;

const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.5fr 0.5fr;
  height: 210px;

  @media (max-width: 1250px) {
    grid-template-columns: 0.75fr 0.75fr 0.75fr;
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-rows: 1fr 0.5fr;
    height: 220px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
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
