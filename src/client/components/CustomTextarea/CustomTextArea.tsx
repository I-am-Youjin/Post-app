import React, { useRef } from "react";
import { StyledTextField } from "./styles";
import { ITextarea } from "../../types/types";

const CustomTextArea: React.FC<ITextarea> = ({
  value,
  placeholder,
  onChange,
}) => {
  const field = useRef(null);
  function resize() {
    setTimeout(function () {
      (field as any).current.style.cssText = "height:auto;";
      (field as any).current.style.cssText =
        "height:" + (field as any).current.scrollHeight + "px";
    }, 1);
  }
  return (
    <StyledTextField
      ref={field}
      placeholder={placeholder}
      onKeyDown={resize}
      rows={1}
      onChange={onChange}
      value={value}
    />
  );
};

export default CustomTextArea;
