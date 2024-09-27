import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "../user/Navbar"
import Footer from "../user/Footer"

const Layout = ({children}) => {

    const location = useLocation();

    const hideNavbarFooterRoutes = ["/login","/register"];

    const shouldHideNavbarFooter = hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
        {!shouldHideNavbarFooter && <Navbar/>}
        <main>{children}</main>
        {!shouldHideNavbarFooter && <Footer/>}
    </>
  )
}

export default Layout