import React, { useState } from "react";
import PropTypes from "prop-types";
import "./InputText.css";
import InputLabel from "./InputLabel";

const InputText = ({
  label,
  value,
  onChange,
  hint,
  size,
  iconBefore,
  iconAfter,
  required,
  disabled,
  error,
  shortkey,
  alignment,
  border,
}) => {
  const [placeholder, setPlaceholder] = useState("Input...");

  const handleChange = (e) => {
    if (placeholder) {
      setPlaceholder("");
    }
    onChange(e);
  };
  return (
    <div className={`input-group ${size} ${error ? "error" : ""}`}>
      <div className="input-wrapper">
        {iconBefore && <span className="icon-before">{iconBefore}</span>}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className="input-text"
        />
        {iconAfter && <span className="icon-after">{iconAfter}</span>}
      </div>
      {hint && <small className="input-hint">{hint}</small>}
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  hint: PropTypes.string,
  size: PropTypes.oneOf([
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
  ]),
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

InputText.defaultProps = {
  size: "medium",
  required: false,
  disabled: false,
  error: false,
};

export default InputText;
