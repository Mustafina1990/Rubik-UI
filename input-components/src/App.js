import "./App.css";
import React, { useState } from "react";
import InputGroup from "./components/InputGroup";
import searchIcon from "./assets/Search.png";
import helpIcon from "./assets/Help-icon.png";
import shortKeyIcon from "./assets/Shortkey.png";
import infoIcon from "./assets/Info-icon.png";
import _BaseInput from "./components/_BaseInput";
import InputManager from "./components/InputManager";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="app">
      <_BaseInput />
      <InputGroup
        label={
          <div>
            Email <img src={infoIcon} alt="info-icon" />
          </div>
        }
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
      <InputManager />
    </div>
  );
}

export default App;
