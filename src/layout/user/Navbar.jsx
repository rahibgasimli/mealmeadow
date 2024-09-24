import React from 'react'

import logo from "../../assets/images/home/navbar-logo.svg"
import { CiHeart,CiShoppingBasket,CiLogin,CiSearch} from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-top">
            <div className="navbar-logo"><img src={logo} alt="" /></div>
            <input type="text" />
            <div className="navbar-top-buttons">
                <CiHeart/>
                <CiShoppingBasket className='shopping-basket'/>
                <CiLogin/>
            </div>
        </div>

        <div className="navbar-bottom">
                <a href="">Ana səhifə</a>
                <a href="">Məhsullar</a>
                <a href="">Əlaqə</a>
                <a href="">Restoranlar</a>
                <a href="">Mağazalar</a>
        </div>
    </div>
  )
}

export default Navbar