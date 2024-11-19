import styled from "styled-components";

export const StyledPage = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled("h4")`
  font-family: "Poppins";
  color: #bcbcbc;
  border-bottom: 1px solid #bcbcbc;
  margin-bottom: 15px;
`;

export const StyledPostInformationBox = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const StyledSecondaryInformation = styled("p")`
  font-family: "Poppins";
  color: #bcbcbc;
  opacity: 0.6;
`;

export const StyledDescription = styled("p")`
  font-family: "Poppins";
  color: #bcbcbc;
  margin-bottom: 15px;
`;

export const StyledActionsBox = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const StyledThubsBox = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;
export const StyledCount = styled("p")`
  font-family: "Poppins";
  color: #bcbcbc;
  min-width: 40px;
`;
