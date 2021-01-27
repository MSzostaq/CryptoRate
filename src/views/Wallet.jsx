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
`;

const StyledHeading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  padding: 16px;
`;

const MidWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  height: 240px;
`;

const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.5fr;
  height: 310px;
`;

function Wallet() {
  return (
    <View>
      <StyledHeading>My Wallet</StyledHeading>
      <MidWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </MidWrapper>
      <BottomWrapper>
        <Card />
        <Card />
      </BottomWrapper>
    </View>
  );
}

export default Wallet;
