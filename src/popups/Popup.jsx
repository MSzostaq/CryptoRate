import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icon from "components/Icon";

const CloseButton = styled(Icon)`
  color: #bdbdbd;
  cursor: pointer;
  position: fixed;
  top: 8px;
  right: 8px;
  width: 48px;
  height: 48px;
`;

const Content = styled(motion.div)`
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  color: #000;
  position: retative;
  width: 900px;
  height: 520px;
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

  return (
    <Overlay onClick={closeModal} ref={modalRef}>
      <Content animate={{ scale: 1.05 }} transition={{ type: "spring" }}>
        <CloseButton icon="close" onClick={onClose} />
      </Content>
    </Overlay>
  );
}

export default Popup;
