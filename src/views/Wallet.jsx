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
    letf: 0;
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
  height: 100px;
  padding: 16px;

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
  }
`;

const BigCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.5fr;
  height: 310px;

  @media (max-width: 1250px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 420px;
  }
`;

const SmallCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  height: 240px;

  @media (max-width: 1250px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 200px;
  }
`;

function Wallet() {
  return (
    <View>
      <StyledHeader />
      <StyledHeading>My Wallet</StyledHeading>
      <BigCardWrapper>
        <Card />
        <Card />
      </BigCardWrapper>
      <SmallCardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </SmallCardWrapper>
      <Sidebar />
    </View>
  );
}

export default Wallet;
