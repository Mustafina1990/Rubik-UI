import React from "react";
import PropTypes from "prop-types";
import InputText from "./InputText";
import InputLabel from "./InputLabel";
import InputAnnotation from "./InputAnnotation";

const InputGroup = ({ label, value, onChange, annotation }) => {
  return (
    <div>
      <InputLabel text={label} />
      <InputText value={value} onChange={onChange} />
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
