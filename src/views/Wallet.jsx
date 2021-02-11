import React from "react";
import styled from "styled-components";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
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
    width: 95%;
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

  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const BigCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.5fr;
  height: 320px;

  @media (max-width: 1250px) {
    grid-template-rows: 1fr;
    height: 420px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    position: fixed;
    top: 120px;
    left: 0;
    width: 100%;
    height: 300px;
  }
`;

const SmallCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  height: 260px;

  @media (max-width: 1250px) {
    grid-template-rows: 1fr 1fr;
    height: 300px;
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: fixed;
    left: 0;
    bottom: 68px;
    width: 100%;
  }
`;

function Wallet() {
  return (
    <View>
      <StyledHeader />
      <StyledHeading>My Wallet</StyledHeading>
      <BigCardWrapper>
        <Card whileHover={{ scale: 1.02 }} />
        <Card whileHover={{ scale: 1.02 }} />
      </BigCardWrapper>
      <SmallCardWrapper>
        <Card whileHover={{ scale: 1.02 }} />
        <Card whileHover={{ scale: 1.02 }} />
        <Card whileHover={{ scale: 1.02 }} />
        <Card whileHover={{ scale: 1.02 }} />
      </SmallCardWrapper>
      <Sidebar />
    </View>
  );
}

export default Wallet;
