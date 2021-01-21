import React from "react";
import styled from "styled-components";

const View = styled.div`
  background-color: #f8f8f8;
  position: absolute;
  top: 48px;
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

function Wallet() {
  return (
    <View>
      <StyledHeading>My Wallet</StyledHeading>
    </View>
  );
}

export default Wallet;
