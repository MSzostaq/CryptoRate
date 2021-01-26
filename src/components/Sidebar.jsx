import React from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import styled from "styled-components";
import Icon from "components/Icon";

const StyledIcon = styled(Icon)`
  color: #d3d3d3;
  padding: 10px 10px 10px 18px;
  width: 56px;
  height: 56px;

  &:active {
    color: #fff;
    font-weight: bold;
  }
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
    </StyledWrapper>
  );
}

export default Sidebar;
