import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Dropdown from "components/Dropdown";

const View = styled(motion.div)`
  background-color: #f8f8f8;
  display: grid;
  position: fixed;
  top: auto;
  bottom: 0;
  right: 0;
  left: 0;
  width: 95%;

  @media (min-width: 800px) {
    top: 64px;
    left: 64px;
  }
`;

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledHeading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  padding: 16px;
  position: fixed;
  top: 48px;
  left: 0;

  @media (min-width: 800px) {
    left: auto;
  }
`;

const StyledDropdown = styled(Dropdown)`
  margin: 12px;
  position: fixed;
  top: 140px;
  width: 300px;
`;

function Graphs() {
  const [selectedValue, setSelectedValue] = useState(null);
  const items = [
    { id: "btc", name: "Bitcoin" },
    { id: "eth", name: "Ether" },
    { id: "xrp", name: "Ripple" },
    { id: "xlm", name: "Stellar" },
    { id: "ltc", name: "Litecoin" },
  ];
  function onValueChange(value) {
    setSelectedValue(value);
  }
  return (
    <View>
      <StyledHeader />
      <StyledHeading>Graphs</StyledHeading>
      <StyledDropdown
        items={items}
        value={selectedValue}
        onChange={onValueChange}
      />
      <Sidebar />
    </View>
  );
}

export default Graphs;
