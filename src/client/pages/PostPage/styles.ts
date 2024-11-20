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
  border-bottom: 1px solid #bcbcbc;
  margin-bottom: 40px;
`;

export const StyledThubsBox = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledCount = styled("p")`
  font-family: "Poppins";
  color: #bcbcbc;
  min-width: 40px;
`;

export const StyledCommentBox = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 40px;
  border-radius: 20px;
  gap: 20px;
`;
export const StyledCommentBoxTitle = styled("p")`
  font-family: "Poppins";
  color: #bcbcbc;
  font-size: 14px;
  margin-bottom: 20px;
`;
