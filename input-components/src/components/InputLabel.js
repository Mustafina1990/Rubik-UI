import React from "react";
import PropTypes from "prop-types";
import infoIcon from "../assets/Info-icon.png";

const InputLabel = ({ text }) => <label>{text}</label>;

InputLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InputLabel;
