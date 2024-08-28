import React from "react";
import PropTypes from "prop-types";

const InputLabel = ({ text }) => <label>{text}</label>;

InputLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InputLabel;
