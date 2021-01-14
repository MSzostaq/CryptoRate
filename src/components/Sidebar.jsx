import React from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
import styled from "styled-components";
import ButtonIcon from "components/ButtonIcon";
import trophyIcon from "icons/trophyIcon.svg";
import profitsIcon from "icons/profitsIcon.svg";
import walletIcon from "icons/walletIcon.svg";

const StyledButtonIcon = styled(ButtonIcon)`
  display: block;
  padding: 10px 10px 10px 18px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledWrapper = styled.nav`
  background-color: #87cefa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 180px;
  height: 100%;
`;

function Sidebar() {
  return (
    <StyledWrapper>
      <StyledButtonIcon icon={trophyIcon} />
      <StyledButtonIcon icon={walletIcon} />
      <StyledButtonIcon icon={profitsIcon} />
    </StyledWrapper>
  );
}

export default Sidebar;
