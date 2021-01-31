import React from "react";
import styled from "styled-components";
import ModalsProvider from "components/ModalsProvider";
import Modals from "components/Modals";
import Routes from "components/Routes";

const StyledApp = styled.div`
  height: 100%;
`;

function App() {
  return (
    <StyledApp>
      <ModalsProvider>
        <Routes />
        <Modals />
      </ModalsProvider>
    </StyledApp>
  );
}

export default App;
