import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Card from "components/Card";

const View = styled(motion.div)`
  background-color: #f8f8f8;
  display: grid;
  position: fixed;
  top: auto;
  bottom: 0;
  right: 0;
  left: 0;
  width: 95%;

  @media (min-width: 800px) {
    top: 64px;
    left: 64px;
`;

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledHeading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  padding: 16px;
  position: fixed;
  top: 48px;
  left: 0;

  @media (min-width: 800px) {
    left: auto;
  }
`;

const Heading = styled(Card)`
  width: 0%;
  height: 0%;

  @media (min-width: 800px) {
    position: fixed;
    top: 128px;
    width: 95%;
    height: 64px;
  }
`;

const MidWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: fixed;
  left: 0;
  top: 160px;
  width: 100%;
  height: 320px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    left: 64px;
    top: 220px;
    width: 95%;
    height: 260px;
  }

  @media (min-width: 1250px) {
    grid-template-columns: 1fr 1fr;
    left: 64px;
    top: 220px;
    width: 95%;
    height: 280px;
  }
`;

const BottomWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  height: 220px;
  position: fixed;
  top: 480px;
  left: 0;
  width: 100%;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    left: 64px;
    top: 480px;
    width: 95%;
    height: 220px;
  }

  @media (min-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr;
    left: 64px;
    top: 500px;
    width: 95%;
    height: 200px;
  }
`;

function Dashboard() {
  return (
    <View>
      <StyledHeader />
      <StyledHeading>Dashboard</StyledHeading>
      <Heading whileHover={{ scale: 1.01 }} />
      <MidWrapper>
        <Card whileHover={{ scale: 1.01 }} />
        <Card whileHover={{ scale: 1.01 }} />
      </MidWrapper>
      <BottomWrapper>
        <Card whileHover={{ scale: 1.01 }} />
        <Card whileHover={{ scale: 1.01 }} />
        <Card whileHover={{ scale: 1.01 }} />
      </BottomWrapper>
      <Sidebar />
    </View>
  );
}

export default Dashboard;
