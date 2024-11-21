import styled from "styled-components";

export const StyledPage = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const StyledInputsBox = styled("div")`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
`;
export const StyledBoxWithLable = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  & p {
    color: #bcbcbc;
    font-size: 14px;
    font-family: "Poppins";
  }
`;
