import React, { useRef } from "react";
import { StyledTextField } from "./styles";

const CustomTextArea = () => {
  const field = useRef(null);
  function resize() {
    setTimeout(function () {
      (field as any).current.style.cssText = "height:auto;";
      (field as any).current.style.cssText =
        "height:" + (field as any).current.scrollHeight + "px";
      console.log("qwddddddddd");
    }, 1);
  }
  return (
    <StyledTextField
      ref={field}
      placeholder="Leave your comment..."
      onKeyDown={resize}
      rows={1}
    />
  );
};

export default CustomTextArea;
