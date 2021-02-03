import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import Button from "components/Button";

const View = styled.div`
  background-color: #f8f8f8;
  display: grid;
  left: 600px;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled(Button)`
  width: 240px;
  height: 40px;
  position: relative;
  left: 32px;
`;

const StyledInput = styled(motion.input)`
  background-color: #d3d3d3;
  border-radius: 12px;
  font-size: 24px;
  margin: 8px;
  padding: 8px;
  width: 320px;
  height: 40px;
  position: relative;
  left: 32px;
`;

const StyledWrapper = styled.div`
  align-content: center;
  background-color: #0f5298;
  display: grid;
  grid-gap: 20px;
  width: 40%;
  height: 100%;

  @media (max-width: 1250px) {
    width: 50%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const StyledHeading = styled.h1`
  background-color: #0f5298;
  color: #d3d3d3;
  font-size: 64px;
  font-weight: bold;
  position: absolute;
  width: 40%;
  height: 120px;

  @media (max-width: 1250px) {
    position: absolute;
    top: 0;
    width: 50%;
    height: 240px;
  }

  @media (max-width: 800px) {
    position: absolute;
    top: 0;
    width: 100%;
    height: 240px;
  }
`;

const StyledAppName = styled.h1`
  padding: 16px;
`;

const StyledLeftSide = styled.div`
  background-color: #f8f8f8;
  position: absolute;
  right: 0;
  width: 60%;
  height: 100%;

  @media (max-width: 1250px) {
    width: 50%;
  }

  @media (max-width: 800px) {
    width: 0%;
  }
`;

function Login() {
  return (
    <View>
      <StyledHeading>
        <StyledAppName>CryptoRate</StyledAppName>
      </StyledHeading>
      <StyledLeftSide />
      <StyledWrapper>
        <StyledInput
          type="text"
          placeholder="Enter Your Email"
          whileHover={{ scale: 1.05 }}
        />
        <StyledInput
          type="text"
          placeholder="Password"
          whileHover={{ scale: 1.05 }}
        />
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
