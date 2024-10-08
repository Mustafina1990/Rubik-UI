import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const _BaseInput = ({ value, onChange, alignment, size, disabled, error }) => {
  const [placeholder, setPlaceholder] = useState("Input...");
  console.log(`"size": ${size}`);

  useEffect(() => {
    console.log(`Class names: input-group ${size} ${error ? "error" : ""}`);
  }, [size, error]);

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
        className={`input-${alignment} input-${size}`}
        style={{ textAlign: alignment }}
      />
    </div>
  );
};

_BaseInput.propTypes = {
  size: PropTypes.oneOf([
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
  ]),
  alignment: PropTypes.oneOf(["left", "right"]),
  border: PropTypes.string,
};

export default _BaseInput;
