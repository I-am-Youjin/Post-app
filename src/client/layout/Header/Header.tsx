import React from "react";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledLogo,
  StyledNav,
  StyledNavItem,
} from "./styles";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyledLogo>LOGO</StyledLogo>
        <StyledNav>
          <StyledNavItem>
            <NavLink to="/">All Posts</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink to="/favorite">Favorite</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink to="/profile">My profile</NavLink>
          </StyledNavItem>
        </StyledNav>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
