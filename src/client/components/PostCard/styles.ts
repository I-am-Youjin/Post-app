import styled from "styled-components";

export const StyledPostCard = styled("div")`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.3s;
  padding: 15px;
  border-radius: 20px;
  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.2);
  }
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
  z-index: 0;
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
