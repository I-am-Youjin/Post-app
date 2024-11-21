import styled from "styled-components";

export const StyledPage = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  transition: 0.3s;
  height: calc(100vh - 192px);
`;
export const StyledForm = styled("div")`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 40px;
  border-radius: 20px;
`;

export const StyledText = styled("p")`
  font-size: 14px;
  color: #bcbcbc;
  font-family: "Poppins";
  text-align: center;
  & span {
    text-decoration: none;
    color: #6669e7;
    cursor: pointer;
  }
`;
