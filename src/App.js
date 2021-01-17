import React from "react";
import styled from "styled-components";
import Routes from "components/Routes";

const StyledApp = styled.div`
  height: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Routes />
    </StyledApp>
  );
}

export default App;
