import React from "react";
import styled from "styled-components";

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
  padding: 15px;
`;

function Graphs() {
  return (
    <View>
      <StyledHeading>Graphs</StyledHeading>
    </View>
  );
}

export default Graphs;
