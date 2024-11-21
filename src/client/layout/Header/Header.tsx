import React from "react";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledLogo,
  StyledNav,
  StyledNavItem,
} from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearCurrentUser } from "../../store/slices/usersSlice";
import { clearFavorite } from "../../store/slices/postsSlice";
import store from "../../store";

const Header = () => {
  const currentUser = useSelector((state: any) => state.users.currentUser);
  const navigate = useNavigate();
  const removeCurrentUser = () => {
    navigate("/");
    store.dispatch(clearCurrentUser());
    store.dispatch(clearFavorite());
  };
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
          {currentUser && (
            <StyledNavItem>
              <NavLink to="/profile">My profile</NavLink>
            </StyledNavItem>
          )}
          {currentUser && (
            <StyledNavItem>
              <NavLink to="/addPost">Add Post</NavLink>
            </StyledNavItem>
          )}
          {currentUser ? (
            <StyledNavItem onClick={removeCurrentUser}> Exit </StyledNavItem>
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
