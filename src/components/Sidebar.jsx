import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "components/Icon";

const StyledIcon = styled(Icon)`
  color: #d3d3d3;
  padding: 10px 10px 10px 18px;
  width: 56px;
  height: 56px;
`;

const StyledLink = styled(Link)`
  align-items: center;
  border-radius: 4px;
  color: #d3d3d3;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  text-decoration: none;
  height: 64px;
`;

const StyledWrapper = styled.nav`
  background-color: #0f5298;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 64px;
  height: 100%;

  @media (max-width: 800px) {
    flex-direction: row;
    grid-gap: 48px;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 64px;
  }
`;

function Sidebar() {
  return (
    <StyledWrapper>
      <StyledLink to="/dashboard">
        <StyledIcon icon="analytics" />
      </StyledLink>
      <StyledLink to="/wallet">
        <StyledIcon icon="wallet" />
      </StyledLink>
      <StyledLink to="/graphs">
        <StyledIcon icon="profit" />
      </StyledLink>
      <StyledLink to="/login">
        <StyledIcon icon="logout" />
      </StyledLink>
    </StyledWrapper>
  );
}

export default Sidebar;
