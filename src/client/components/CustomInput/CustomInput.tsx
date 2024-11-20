import React from "react";
import { StyledInput } from "./styles";
import { IInput } from "../../types/types";

const CustomInput: React.FC<IInput> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></StyledInput>
  );
};

export default CustomInput;
