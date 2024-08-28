import "./App.css";
import React, { useState } from "react";
import InputGroup from "./components/InputGroup";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <InputGroup
        label="Username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        annotation="Please enter your username"
      />
    </div>
  );
}

export default App;
