import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "components/Button";

const View = styled.div`
  background-color: #f8f8f8;
  display: grid;
  width: 100%;
  height: 100%;
`;

const PrimaryButton = styled(Button)`
  color: #696969;
  width: 420px;
  height: 48px;
`;

const SecondaryButton = styled(Button)`
  width: 240px;
  height: 48px;
`;

const StyledWrapper = styled.div`
  align-content: center;
  background-color: #0f5298;
  display: grid;
  grid-gap: 20px;
  top: 48px;
  left: 24px;
  width: 480px;
  height: 100%;
`;

const StyledHeading = styled.h1`
  background-color: #0f5298;
  font-size: 64px;
  font-weight: bold;
  position: absolute;
  width: 480px;
  height: 120px;
`;

function Login() {
  return (
    <View>
      <StyledHeading>
        <h1>CryptoRate</h1>
      </StyledHeading>
      <StyledWrapper>
        <Link>
          <PrimaryButton>Enter Your Email</PrimaryButton>
        </Link>
        <Link>
          <PrimaryButton>Enter Your Password</PrimaryButton>
        </Link>
        <Link to="/dashboard">
          <SecondaryButton>Login</SecondaryButton>
        </Link>
        <Link>
          <SecondaryButton>Create Account</SecondaryButton>
        </Link>
      </StyledWrapper>
    </View>
  );
}

export default Login;
