import React from "react";

const InputManager = ({ alignment, onAlignmentChange, size, onSizeChange }) => {
  return (
    <div>
      <div className="alignment-options">
        <label>
          Alignment:
          <select value={alignment} onChange={onAlignmentChange}>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>
      </div>
      <div className="size-options">
        <label>
          Size:
          <select value={size} onChange={onSizeChange}>
            <option value="extra-small">Extra-small</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra-large</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default InputManager;
