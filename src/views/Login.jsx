import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "components/Button";
import Placeholder from "components/Placeholder";

const View = styled.div`
  background-color: #f8f8f8;
  display: grid;
  width: 100%;
  height: 100%;
`;

const StyledPlaceholder = styled(Placeholder)`
  color: #696969;
  width: 320px;
  height: 48px;
  position: relative;
  left: 32px;
`;

const StyledButton = styled(Button)`
  width: 240px;
  height: 40px;
  position: relative;
  left: 32px;
`;

const StyledWrapper = styled.div`
  align-content: center;
  background-color: #0f5298;
  display: grid;
  grid-gap: 20px;
  width: 600px;
  height: 100%;
`;

const StyledHeading = styled.h1`
  background-color: #0f5298;
  color: #d3d3d3;
  font-size: 64px;
  font-weight: bold;
  position: absolute;
  width: 600px;
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
          <StyledPlaceholder
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter Your Email
          </StyledPlaceholder>
        </Link>
        <Link>
          <StyledPlaceholder
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter Your Password
          </StyledPlaceholder>
        </Link>
        <Link to="/dashboard">
          <StyledButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Login
          </StyledButton>
        </Link>
        <Link>
          <StyledButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Create Account
          </StyledButton>
        </Link>
      </StyledWrapper>
    </View>
  );
}

export default Login;
