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

function Wallet() {
  return (
    <View>
      <h1>My Wallet</h1>
    </View>
  );
}

export default Wallet;
