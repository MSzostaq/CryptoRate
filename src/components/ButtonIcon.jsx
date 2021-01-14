import styled from "styled-components";

const ButtonIcon = styled.button`
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  border-radius: 4px;
  display: block;
  margin: 24px 24px 18px 12px;
  width: 36px;
  height: 36px;
`;

export default ButtonIcon;
