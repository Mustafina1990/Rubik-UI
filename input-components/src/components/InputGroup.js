import React from "react";
import PropTypes from "prop-types";
import InputText from "./InputText";
import InputLabel from "./InputLabel";
import InputAnnotation from "./InputAnnotation";
import "./InputGroup.css";

const InputGroup = ({
  label,
  value,
  onChange,
  annotation,
  iconBefore,
  iconAfter,
  alignment,
  size,
  required,
  state,
  border,
  helperText,
  info,
}) => {
  return (
    <div>
      <InputLabel text={label} required={required} />
      <InputText
        value={value}
        onChange={onChange}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
        alignment={alignment}
        className="input-group"
        size={size}
      />
      {annotation && <InputAnnotation text={annotation} />}
    </div>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  annotation: PropTypes.string,
  required: PropTypes.bool,
};

export default InputGroup;
