import React from "react";
import styled from "styled-components";

const View = styled.div`
  background-color: #ff0000;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 30px;
  width: 89%;
  height: 93%;
`;

function Dashboard() {
  return <View></View>;
}

export default Dashboard;
