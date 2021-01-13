import styled from "styled-components";

const ButtonIcon = styled.button`
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
`;

export default ButtonIcon;
