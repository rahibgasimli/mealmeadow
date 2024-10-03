import React from 'react'

import logo from "../../assets/images/home/navbar-logo.svg"
import { CiHeart,CiShoppingBasket,CiLogin,CiSearch} from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-top">
            <div className="navbar-logo"><Link to="/"><img src={logo} alt="" /></Link></div>
            <input type="text" />
            <div className="navbar-top-buttons">
                <Link to=""><CiHeart/></Link>
                <Link to=""><CiShoppingBasket className='shopping-basket'/></Link>
                <Link to="/login"><CiLogin/></Link>
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