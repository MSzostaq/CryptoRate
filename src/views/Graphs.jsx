import React, { useState } from "react";
import styled from "styled-components";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Dropdown from "components/Dropdown";

const View = styled.div`
  background-color: #f8f8f8;
  display: grid;
  position: fixed;
  top: 64px;
  bottom: 0;
  right: 0;
  left: 64px;

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    width: 95%;
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

  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const StyledDropdown = styled(Dropdown)`
  margin: 12px;
  position: fixed;
  width: 320px;
  top: 160px;

  @media (max-width: 1250px) {
    top: 160px;
  }

  @media (max-width: 800px) {
    top: 100px;
  }
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
