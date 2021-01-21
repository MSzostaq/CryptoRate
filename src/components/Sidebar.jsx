import React from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import styled from "styled-components";
import Icon from "components/Icon";

const StyledLink = styled(Link)`
  align-items: center;
  border-radius: 4px;
  color: inherit;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  text-decoration: none;
  width: 180px;
  height: 60px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledIcon = styled(Icon)`
  color: #000;
  padding: 10px 10px 10px 18px;
  width: 56px;
  height: 56px;
`;

const StyledWrapper = styled.nav`
  background-color: #b8b8b8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 180px;
  height: 100%;
`;

function Sidebar({ className }) {
  return (
    <StyledWrapper className={className}>
      <StyledLink to="/dashboard">
        <StyledIcon icon="add" />
        <p>Dashboard</p>
      </StyledLink>
      <StyledLink to="/mywallet">
        <StyledIcon icon="close" />
        <p>My Wallet</p>
      </StyledLink>
      <StyledLink to="/graphs">
        <StyledIcon icon="caretDown" />
        <p>Graphs</p>
      </StyledLink>
    </StyledWrapper>
  );
}

export default Sidebar;
