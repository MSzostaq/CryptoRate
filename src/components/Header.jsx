import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";

const Heading = styled.div`
  background-color: #b8b8b8;
  position fixed;
  width: 100%;
  height: 60px;
`;

const StyledIcon = styled(Icon)`
  margin: 4px 4px;
  padding: 2px;
  position fixed;
  top: 0;
  right: 0;
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
