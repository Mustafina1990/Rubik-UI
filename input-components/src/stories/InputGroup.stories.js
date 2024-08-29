import React, { useState } from "react";
import InputGroup from "../components/InputGroup";

export default {
  title: "Components/InputGroup",
  component: InputGroup,
};

export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <InputGroup
      label="Label"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
