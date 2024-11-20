import styled from "styled-components";

export const StyledHeader = styled("header")`
  width: 100%;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
`;
export const StyledHeaderWrapper = styled("div")`
  max-width: 1440px;
  padding: 0 80px;
  margin: 0 auto 64px;
  position: sticky;
  top: 0;
  right: 0;
  background-color: #1f1d2b;
  z-index: 10;
`;

export const StyledLogo = styled("h3")`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  background: -webkit-linear-gradient(#9b51e0, #3081ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledNav = styled("ul")`
  display: flex;
  width: 388px;
  justify-content: space-between;
`;

export const StyledNavItem = styled("li")`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 1.5px;
  color: #bcbcbc;
  position: relative;
  transition: 0.3s;

  &:hover {
    color: #6669e7;
  }
  & a {
    cursor: pointer;
    text-decoration: none;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 1.5px;
    color: #bcbcbc;
    position: relative;
    transition: 0.3s;

    &::after {
      position: absolute;
      content: " ";
      width: 0%;
      height: 1px;
      background: #6669e7;
      bottom: 0;
      left: 0;
      transition: 0.3s;
    }

    &.active {
      color: #6669e7;

      &::after {
        width: 100%;
      }
    }

    &:hover {
      color: #6669e7;
    }
  }
`;
