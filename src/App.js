import React, { useState } from "react";
// import styled from "styled-components";
import Button from "components/Button";
import Toggle from "components/Toggle";

function App() {
  const [value, setValue] = useState(true);

  function onValueChange(newValue) {
    setValue(newValue);
  }
  return (
    <div>
      <h1>Hello</h1>
      <Button>ok</Button>
      <Toggle value={value} onChange={onValueChange} />
    </div>
  );
}

export default App;
