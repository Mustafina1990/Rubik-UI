import React, { useState } from "react";
import PropTypes from "prop-types";
import "./InputText.css";

const InputText = ({
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
  const [isEmpty, setIsEmpty] = useState(!value);

  const handleFocus = (e) => {
    if (!e.target.value) {
      setIsEmpty(true);
    }
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const handleChange = (e) => {
    onChange(e);
    if (!e.target.value) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  return (
    <div className={`input-group ${size} ${error ? "error" : ""}`}>
      <div className="input-wrapper">
        {iconBefore && <span className="icon-before">{iconBefore}</span>}
        <input
          type="text"
          value={value}
          size={size}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`input-text input-${size} ${isEmpty ? "empty" : ""}`}
          style={{ textAlign: alignment }}
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
  alignment: PropTypes.oneOf(["left", "right"]),
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
  alignment: "left",
  required: false,
  disabled: false,
  error: false,
};

export default InputText;
