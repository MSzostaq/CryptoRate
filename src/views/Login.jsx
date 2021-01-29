import React from "react";
import styled from "styled-components";
import Button from "components/Button";

const View = styled.div`
  background-color: #f8f8f8;
  display: grid;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled(Button)`
  margin: 12px;
`;

const StyledWrapper = styled.div`
  position: fixed;
  top: 240px;
  left: 24px;
  width: 320px;
  height: 320px;
`;

const StyledHeading = styled.h1`
  font-size: 64px;
  font-weight: bold;
  position: absolute;
  height: 120px;
`;

function Login() {
  return (
    <View>
      <StyledHeading>
        <h1>CryptoRate</h1>
      </StyledHeading>
      <StyledWrapper>
        <StyledButton>Enter Your Email</StyledButton>
        <StyledButton>Enter Your Password</StyledButton>
        <StyledButton>Login</StyledButton>
        <StyledButton>Create Account</StyledButton>
      </StyledWrapper>
    </View>
  );
}

export default Login;
