import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "components/Button";
import Icon from "components/Icon";

const StyledButton = styled(Button)`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 56px;
  height: 56px;
`;

const StyledIcon = styled(Icon)`
  color: #d3d3d3;
  width: 32px;
  height: 32px;
`;

const StyledLink = styled(Link)`
  align-items: center;
  border-radius: 4px;
  color: #d3d3d3;
  text-decoration: none;
  height: 56px;
`;

const StyledWrapper = styled.nav`
  background-color: #0f5298;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: fixed;
  top: auto;
  bottom: 0;
  width: 100%;
  height: 64px;

  @media (min-width: 800px) {
    flex-direction: column;
    justify-content: center;
    gap: 64px;
    left: 0;
    top: 0;
    width: 64px;
    height: 100%;
  }
`;

function Sidebar() {
  return (
    <StyledWrapper>
      <StyledButton whileTap={{ scale: 0.95 }}>
        <StyledLink to="/dashboard">
          <StyledIcon icon="analytics" />
        </StyledLink>
      </StyledButton>
      <StyledButton whileTap={{ scale: 0.95 }}>
        <StyledLink to="/wallet">
          <StyledIcon icon="wallet" />
        </StyledLink>
      </StyledButton>
      <StyledButton whileTap={{ scale: 0.95 }}>
        <StyledLink to="/graphs">
          <StyledIcon icon="profit" />
        </StyledLink>
      </StyledButton>
    </StyledWrapper>
  );
}

export default Sidebar;
