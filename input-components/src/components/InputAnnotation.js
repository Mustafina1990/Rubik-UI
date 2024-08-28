import React from "react";
import PropTypes from "prop-types";

const InputAnnotation = ({ text }) => {
  return <small>{text}</small>;
};

InputAnnotation.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InputAnnotation;
