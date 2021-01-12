import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const StyledSidebar = styled.div`
  background-color: #000000;
`;

const Sidebar = () => {
  <StyledSidebar>
    <Button as={Link} to="/wallet">
      test
    </Button>
  </StyledSidebar>;
};

export default Sidebar;
