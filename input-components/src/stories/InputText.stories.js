import React, { useState } from "react";
import InputText from "../components/InputText";

export default {
  title: "Components/InputText",
  component: InputText,
};

export const Default = () => {
  const [value, setValue] = useState("");
  return <InputText value={value} onChange={(e) => setValue(e.target.value)} />;
};
