import React from "react";
import PropTypes from "prop-types";
import "./InputText.css";

const InputText = ({
  label,
  value,
  onChange,
  placeholder,
  hint,
  size,
  iconBefore,
  iconAfter,
  required,
  disabled,
  error,
}) => (
  <div className={`input-group ${size} ${error ? "error" : ""}`}>
    <label>
      {label} {required && <span className="required">*</span>}
    </label>
    <div className="input-wrapper">
      {iconBefore && <span className="icon-before">{iconBefore}</span>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="input-text"
      />
      {iconAfter && <span className="icon-after">{iconAfter}</span>}
    </div>
    {hint && <small className="input-hint">{hint}</small>}
  </div>
);

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
