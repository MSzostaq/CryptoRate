import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "components/Icon";

const Heading = styled.div`
  background-color: #dcdcdc;
  position: fixed;
  width: 100%;
  height: 60px;
`;

const StyledIcon = styled(Icon)`
  position: fixed;
  top: 2px;
  right: 16px;
  width: 48px;
  height: 48px;

  &:active {
    color: #000;
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  color: #696969;
  text-decoration: none;
`;

function Header() {
  return (
    <Heading>
      <StyledLink>
        <StyledIcon icon="user" />
      </StyledLink>
    </Heading>
  );
}

export default Header;
