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
  display: grid;
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
