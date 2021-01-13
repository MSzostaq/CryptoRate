import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "components/Button";

const StyledButton = styled(Button)`
  width: 56px;
  height: 56px;
`;

const StyledWrapper = styled.nav`
  align-items: center;
  background-color: #0066ff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 100%;
`;

function Sidebar() {
  return (
    <StyledWrapper>
      <StyledButton>test</StyledButton>
      <StyledButton>test</StyledButton>
      <StyledButton>test</StyledButton>
    </StyledWrapper>
  );
}

export default Sidebar;
