import React from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import styled from "styled-components";
import Icon from "components/Icon";

const StyledIcon = styled(Icon)`
  color: #696969;
  padding: 10px 10px 10px 18px;
  width: 56px;
  height: 56px;

  &:active {
    color: #000;
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  align-items: center;
  border-radius: 4px;
  color: #696969;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  text-decoration: none;
  width: 170px;
  height: 60px;

  &:active {
    color: #000;
    font-weight: bold;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledWrapper = styled.nav`
  background-color: #dcdcdc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 160px;
  height: 100%;
`;

function Sidebar() {
  return (
    <StyledWrapper>
      <StyledLink to="/dashboard">
        <StyledIcon icon="analytics" />
        <p>Dashboard</p>
      </StyledLink>
      <StyledLink to="/wallet">
        <StyledIcon icon="wallet" />
        <p>My Wallet</p>
      </StyledLink>
      <StyledLink to="/graphs">
        <StyledIcon icon="profit" />
        <p>Graphs</p>
      </StyledLink>
    </StyledWrapper>
  );
}

export default Sidebar;
