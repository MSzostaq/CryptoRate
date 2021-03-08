import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "components/Button";
import Icon from "components/Icon";
import Toggle from "components/Toggle";

const StyledCloseButton = styled(Button)`
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  position: fixed;
  top: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
`;

const StyledHeading = styled.h1`
  font-size: 38px;
  font-weight: bold;
  padding: 8px;
  position: fixed;
  top: 0;
  left: 0;
`;

const CloseIcon = styled(Icon)`
  color: #bdbdbd;
  width: 40px;
  height: 40px;
`;

const Content = styled(motion.div)`
  background-color: #f8f8f8;
  border-radius: 12px;
  color: #000;
  position: retative;
  width: 100vw;
  height: 80vh;
  margin: 50px;

  @media (min-width: 800px) {
    width: 70vw;
    height: 70vh;
    margin: 120px;
  }
`;

const ContentHeader = styled.div`
  width: 100%;
  height: 64px;
`;

const MainContent = styled.div`
  position: fixed;
  top: 64px;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
`;

function Popup({ onClose }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [value, setValue] = useState(true);

  function onValueChange(newValue) {
    setValue(newValue);
  }

  return (
    <Overlay onClick={closeModal} ref={modalRef}>
      <Content animate={{ scale: 1.1 }} transition={{ type: "spring" }}>
        <ContentHeader>
          <StyledHeading>Settings</StyledHeading>
          <StyledCloseButton whileTap={{ scale: 0.95 }}>
            <CloseIcon icon="close" onClick={onClose} />
          </StyledCloseButton>
        </ContentHeader>
        <MainContent>
          <Toggle value={value} onChange={onValueChange} />
        </MainContent>
      </Content>
    </Overlay>
  );
}

export default Popup;
