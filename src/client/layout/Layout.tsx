import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "./styles";

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
};

export default Layout;
