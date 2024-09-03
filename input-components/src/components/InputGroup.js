import React from "react";
import PropTypes from "prop-types";
import InputText from "./InputText";
import InputLabel from "./InputLabel";
import InputAnnotation from "./InputAnnotation";
import _BaseInput from "./_BaseInput";
import "./InputGroup.css";

const InputGroup = ({
  label,
  value,
  onChange,
  annotation,
  iconBefore,
  iconAfter,
  size,
  state,
  labelPosition,
  border,
  helperText,
  info,
}) => {
  return (
    <div>
      <InputLabel text={label} />
      <InputText
        value={value}
        onChange={onChange}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
        className="input-group"
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
};

export default InputGroup;
