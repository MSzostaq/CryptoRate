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
  }
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

const BigCardWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  position: fixed;
  top: 120px;
  left: 0;
  width: 100%;
  height: 280px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    left: 64px;
    top: 128px;
    width: 92%;
    height: 580px;
  }

  @media (min-width: 1250px) {
    grid-template-columns: 1fr 1fr;
    width: 95%;
    height: 720px;
  }
`;

const SmallCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  top: 400px;
  left: 0;
  width: 100%;
  height: 260px;

  @media (min-width: 800px) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    left: 64px;
    top: 420px;
    width: 92%;
    height: 520px;
  }

  @media (min-width: 1250px) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    left: 64px;
    top: 480px;
    width: 95%;
    height: 500px;
  }
`;

function Wallet() {
  return (
    <View>
      <StyledHeader />
      <StyledHeading>My Wallet</StyledHeading>
      <BigCardWrapper>
        <Card whileHover={{ scale: 1.01 }} />
        <Card whileHover={{ scale: 1.01 }} />
      </BigCardWrapper>
      <SmallCardWrapper>
        <Card whileHover={{ scale: 1.01 }} />
        <Card whileHover={{ scale: 1.01 }} />
        <Card whileHover={{ scale: 1.01 }} />
        <Card whileHover={{ scale: 1.01 }} />
      </SmallCardWrapper>
      <Sidebar />
    </View>
  );
}

export default Wallet;
