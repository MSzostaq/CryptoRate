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
  bottom: 0;
  right: 0;
  left: 0;
  width: 95%;

  @media (min-width: 800px) {
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
  top: 0;
  left: 0;

  @media (min-width: 800px) {
    top: 64px;
    left: auto;
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
    bottom: 20px;
    width: 100%;
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
