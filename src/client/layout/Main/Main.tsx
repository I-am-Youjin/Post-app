import React from "react";
import { IComponentWithChildren } from "../../types/types";
import { StyledSection } from "./styles";

const Main: React.FC<IComponentWithChildren> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Main;
