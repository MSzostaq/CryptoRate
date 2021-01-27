import React, { useState } from "react";
import styled from "styled-components";
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

const StyledHeading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  padding: 15px;
`;

const StyledDropdown = styled(Dropdown)`
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
      <StyledHeading>Graphs</StyledHeading>
      <StyledDropdown
        items={items}
        value={selectedValue}
        onChange={onValueChange}
      />
    </View>
  );
}

export default Graphs;
