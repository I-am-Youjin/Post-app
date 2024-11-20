import React from "react";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledLogo,
  StyledNav,
  StyledNavItem,
} from "./styles";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";

const Header = () => {
  const currentUser = useSelector((state: any) => state.users.currentUser);
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
          {currentUser ? (
            <StyledNavItem> Exit </StyledNavItem>
          ) : (
            <StyledNavItem>
              <NavLink to="/Auth">Auth</NavLink>
            </StyledNavItem>
          )}
        </StyledNav>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
