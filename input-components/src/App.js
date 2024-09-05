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
  const [alignment, setAlignment] = useState("left");
  const [size, setSize] = useState("medium");

  const handleAlignmentChange = (e) => {
    setAlignment(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="container">
      <div className="input-group-wrapper">
        {/* <_BaseInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        alignment={alignment}
        size={size}
        disabled={false}
        error={false}
        onSizeChange={handleSizeChange}
      /> */}
        <InputGroup
          label={
            <div>
              Email <img src={infoIcon} alt="info-icon" />
            </div>
          }
          value={value}
          alignment={alignment}
          onChange={(e) => setValue(e.target.value)}
          annotation="Please enter your username"
          iconBefore={<img src={searchIcon} alt="serch-icon" />}
          iconAfter={
            <div className="icons-wrapper">
              <img src={helpIcon} alt="help-icon" />
              <img src={shortKeyIcon} alt="shortKey-icon" />
            </div>
          }
          size={size}
          onSizeChange={handleSizeChange}
        />
        <div className="input-manager-wrapper">
          <InputManager
            alignment={alignment}
            onAlignmentChange={handleAlignmentChange}
            size={size}
            onSizeChange={handleSizeChange}
          />
        </div>
      </div>
      <footer className="footer">Footer Content</footer>
    </div>
  );
}

export default App;
