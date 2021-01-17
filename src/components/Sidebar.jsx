import React from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import styled from "styled-components";
import ButtonIcon from "components/ButtonIcon";
import trophyIcon from "icons/trophyIcon.svg";
import profitsIcon from "icons/profitsIcon.svg";
import walletIcon from "icons/walletIcon.svg";

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

const StyledButtonIcon = styled(ButtonIcon)`
  display: block;
  padding: 10px 10px 10px 18px;
`;

const StyledWrapper = styled.nav`
  background-color: #87cefa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 180px;
  height: 100%;
`;

function Sidebar({ className }) {
  return (
    <StyledWrapper className={className}>
      <StyledLink to="/dashboard">
        <StyledButtonIcon icon={trophyIcon} />
        <p>Dashboard</p>
      </StyledLink>
      <StyledLink to="/mywallet">
        <StyledButtonIcon icon={walletIcon} />
        <p>My Wallet</p>
      </StyledLink>
      <StyledLink to="/graphs">
        <StyledButtonIcon icon={profitsIcon} />
        <p>Graphs</p>
      </StyledLink>
    </StyledWrapper>
  );
}

export default Sidebar;
