import styled from "styled-components";

export const StyledCommentBox = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: rgba(31, 29, 43, 0.6);
  border-radius: 10px;
  padding: 20px;
`;
export const StyledTitle = styled("h4")`
  font-family: "Poppins";
  color: #bcbcbc;
  font-size: 14px;
  border-bottom: 1px solid #bcbcbc;
  margin-bottom: 15px;
`;
export const StyledDescription = styled("p")`
  font-family: "Poppins";
  color: #bcbcbc;
  font-size: 14px;
  margin-bottom: 15px;
`;
export const StyledInfoBox = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const StyledInfoText = styled("p")`
  font-family: "Poppins";
  color: #bcbcbc;
  font-size: 12px;
  opacity: 0.6;
`;
