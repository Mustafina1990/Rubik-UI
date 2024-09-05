import React from "react";
import PropTypes from "prop-types";
import "./InputLabel.css";

const InputLabel = ({ text }) => <label>{text}</label>;

InputLabel.propTypes = {
  text: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default InputLabel;
