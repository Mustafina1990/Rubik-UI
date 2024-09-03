import React, { useState } from "react";
import _BaseInput from "./_BaseInput";

const InputManager = (props) => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignmentChange = (e) => {
    setAlignment(e.target.value);
  };

  return (
    <div>
      <div className="alignment-options">
        <label>
          Alignment:
          <select value={alignment} onChange={handleAlignmentChange}>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>
      </div>
      <_BaseInput
        onChange={() => {}}
        alignment={alignment}
        size="medium"
        disabled={false}
        error={false}
      />
    </div>
  );
};

export default InputManager;
