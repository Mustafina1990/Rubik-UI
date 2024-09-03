import React, { useState } from "react";
import InputText from "../components/InputText";
import searchIcon from "../assets/Search.png";
import helpIcon from "../assets/Help-icon.png";
import shortKeyIcon from "../assets/Shortkey.png";
import infoIcon from "../assets/Info-icon.png";

export default {
  title: "Components/InputText",
  component: InputText,
};

export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <InputText
      label="Email"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Input..."
      hint="This is a hint text to help user."
    />
  );
};

export const WithIcons = () => {
  const [value, setValue] = useState("");
  return (
    <InputText
      label={
        <div>
          Email <img src={infoIcon} alt="info-icon" />
        </div>
      }
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Input..."
      hint="This is a hint text to help user."
      iconBefore={<img src={searchIcon} alt="serch-icon" />}
      iconAfter={
        <div className="icons-wrapper">
          <img src={helpIcon} alt="help-icon" />
          <img src={shortKeyIcon} alt="shortKey-icon" />
        </div>
      }
    />
  );
};

export const Sizes = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <InputText
        label={
          <div>
            Email <img src={infoIcon} alt="info-icon" />
          </div>
        }
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Input..."
        size="extra-small"
      />
      <InputText
        label={
          <div>
            Email <img src={infoIcon} alt="info-icon" />
          </div>
        }
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Input..."
        size="small"
      />
      <InputText
        label={
          <div>
            Email <img src={infoIcon} alt="info-icon" />
          </div>
        }
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Input..."
        size="medium"
      />
      <InputText
        label={
          <div>
            Email <img src={infoIcon} alt="info-icon" />
          </div>
        }
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Input..."
        size="large"
      />
      <InputText
        label={
          <div>
            Email <img src={infoIcon} alt="info-icon" />
          </div>
        }
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Input..."
        size="extra-large"
      />
    </>
  );
};
