import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "components/Icon";
import Modal from "components/Modal";
import Popup from "popups/Popup";

const Heading = styled.div`
  background-color: #f8f8f8;
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
`;

const StyledAlertIcon = styled(Icon)`
  position: fixed;
  top: 18px;
  right: 72px;
  width: 32px;
  height: 32px;
`;

const StyledSettingsIcon = styled(Icon)`
  position: fixed;
  top: 8px;
  right: 8px;
  width: 48px;
  height: 48px;
`;

const StyledLink = styled(Link)`
  color: #696969;
  text-decoration: none;
`;

function Header() {
  return (
    <Heading>
      <StyledLink>
        <StyledSettingsIcon icon="settings" />
        <StyledAlertIcon icon="notification" />
      </StyledLink>
    </Heading>
  );
}

export default Header;
