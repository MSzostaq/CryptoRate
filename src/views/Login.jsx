import React from "react";
import styled from "styled-components";
import Button from "components/Button";

const View = styled.div`
  background-color: #f8f8f8;
  display: grid;
`;

const StyledHeading = styled.h1`
  font-size: 64px;
  font-weight: bold;
  height: 120px;
`;

function Login() {
  return (
    <View>
      <StyledHeading />
      <Button>Login</Button>
    </View>
  );
}

export default Login;
