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
`;

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledHeading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  padding: 15px;
`;

const StyledDropdown = styled(Dropdown)`
  margin: 12px;
  position: fixed;
  top: 160px;
  left: 8px;
  width: 320px;
`;

function Graphs() {
  const [selectedValue, setSelectedValue] = useState(null);
  const items = [
    { id: "btc", name: "BitCoin" },
    { id: "eth", name: "Ether" },
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
