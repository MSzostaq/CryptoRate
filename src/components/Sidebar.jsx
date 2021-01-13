import React from "react";
//  import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "components/Button";
import ButtonIcon from "components/ButtonIcon";
import trophyIcon from "icons/trophyIcon.svg";

const StyledButtonIcon = styled(ButtonIcon)`
  margin-top: 12px;
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
      <StyledButtonIcon icon={trophyIcon} activeclass="active" />
    </StyledWrapper>
  );
}

export default Sidebar;
