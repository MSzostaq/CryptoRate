import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";

const Heading = styled.div`
  background-color: #ffe4e1;
  position fixed;
  width: 100%;
  height: 60px;
`;

const StyledIcon = styled(Icon)`
  margin: 4px;
  padding: 2px;
  position fixed;
  top: 4px;
  right: 4px;
  width: 32px;
  height: 32px;
`;

function Header() {
  return (
    <Heading>
      <StyledIcon icon="close" />
    </Heading>
  );
}

export default Header;
