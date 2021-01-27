import React from "react";
import styled from "styled-components";
import Card from "components/Card";

const View = styled.div`
  background-color: #f8f8f8;
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const LeftSide = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 12px;
  position: fixed;
  bottom: 0;
  left: 70px;
  width: 600px;
  height: 600px;
`;

const RightSide = styled.div`
  display: grid;
  padding: 12px;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 600px;
`;

const LeftSideCard = styled(Card)`
  box-shadow: 1px 1px 1px 1px #696969;
`;

const RightSideCard = styled(Card)`
  box-shadow: 1px 1px 1px 1px #696969;
`;

function Wallet() {
  return (
    <View>
      <StyledHeading>My Wallet</StyledHeading>
      <LeftSide>
        <LeftSideCard />
        <LeftSideCard />
      </LeftSide>
      <RightSide>
        <RightSideCard />
      </RightSide>
    </View>
  );
}

export default Wallet;
