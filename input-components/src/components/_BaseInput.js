import React, { useState } from "react";
import PropTypes from "prop-types";

const _BaseInput = ({ value, onChange, size, disabled, error }) => {
  const [placeholder, setPlaceholder] = useState("Input...");

  const handleChange = (e) => {
    if (placeholder) {
      setPlaceholder("");
    }
    onChange(e);
  };
  return (
    <div className={`input-group ${size} ${error ? "error" : ""}`}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className="input-text"
      />
    </div>
  );
};

_BaseInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  alignment: PropTypes.oneOf(["left", "center", "right"]),
  border: PropTypes.string,
  typingSide: PropTypes.oneOf(["left", "right"]).isRequired,
};

export default _BaseInput;
