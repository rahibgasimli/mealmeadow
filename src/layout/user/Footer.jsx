import React from 'react'

import logo from "../../assets/images/home/footer-logo.svg"

import { LiaTelegram,LiaInstagram,LiaYoutube   } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhone,FiMail  } from "react-icons/fi";


const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-logo"><img src={logo} alt="" /></div>
        <div className="footer-links">
            <h3>Meal Meadow</h3>
            <a href="">Ana səhifə</a>
            <a href="">Haqqımızda</a>
            <a href="">Restoranlar</a>
            <a href="">Partnyorlar</a>
            <a href="">Məhsullar</a>
            <a href="">Mağazalar</a>
        </div>
        <div className="footer-contact">
            <h3>Əlaqə</h3>
            <a href="tel:18884521505"><FiPhone className='footer-contact-phone'/>   1-888-452-1505</a>
            <a href="mailto:mealmeadow@gmail.com"><FiMail className='footer-contact-mail'/>  mealeadow@gmail.com</a>
            <div className="email-input">
                <input type="text" placeholder='E-mail'/>
                <button><LiaTelegram/></button>
            </div>
        </div>
        <div className="footer-socials">
            <a href=""><LiaInstagram/></a>
            <a href=""><RiTwitterXLine/></a>
            <a href=""><LiaTelegram/></a>
            <a href=""><LiaYoutube/></a>
        </div>
    </div>
    <span className="footer-bottom">© 2024 W. CONCEPT USA INC. All Rights reserved</span>
    </>
  )
}

export default Footer