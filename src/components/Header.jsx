import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
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
  color: #696969;
  position: fixed;
  top: 18px;
  right: 72px;
  width: 32px;
  height: 32px;
`;

const StyledSettingsIcon = styled(Icon)`
  color: #696969;
  position: fixed;
  top: 8px;
  right: 8px;
  width: 48px;
  height: 48px;
`;

function Header() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Heading>
      <Button onClick={openModal}>click me</Button>
      {showModal && (
        <Modal>
          <Popup onClose={() => setShowModal(false)} />
        </Modal>
      )}
      <StyledSettingsIcon icon="settings" />
      <StyledAlertIcon icon="notification" />
    </Heading>
  );
}

export default Header;
