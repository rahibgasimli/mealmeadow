/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../user/Navbar";
import Footer from "../user/Footer";

const Layout = () => {
  const location = useLocation();

  const hideNavbarFooterRoutes = ["/login", "/register"];

  const shouldHideNavbarFooter = hideNavbarFooterRoutes.includes(
    location.pathname
  );

  return (
    <>
      {!shouldHideNavbarFooter && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
};

export default Layout;
