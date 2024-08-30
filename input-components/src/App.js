import "./App.css";
import React, { useState } from "react";
import InputGroup from "./components/InputGroup";
import searchIcon from "./assets/Search.png";
import helpIcon from "./assets/Help-icon.png";
import shortKeyIcon from "./assets/Shortkey.png";

function App() {
  const [value, setValue] = useState("input...");

  return (
    <div className="app">
      <InputGroup
        label="Username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        annotation="Please enter your username"
        iconBefore={<img src={searchIcon} alt="serch-icon" />}
        iconAfter={
          <div className="icons-wrapper">
            <img src={helpIcon} alt="help-icon" />
            <img src={shortKeyIcon} alt="shortKey-icon" />
          </div>
        }
      />
    </div>
  );
}

export default App;
