import React from 'react'

import productDetails from "../../assets/images/products/products-details.svg"
import sebetIconu from "../../assets/images/products/sebet-icon.svg"

import { IoMdStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import EndirimliMehsullar from '../home/EndirimliMehsullar';
import Contact from '../home/Contact';

const ProductDetails = (props) => {
    let {name} = props
    return (
        <>
            <div className='product-details'>
                <h1><b>Endirimli</b> mehsullar/ <span>Sezar salatı</span></h1>
                <div className="product-details-center">
                    <div className="product-details-left"><img src={productDetails} alt="" /></div>
                    <div className="product-details-right">
                        <h3>{name}</h3>
                        <h4>170 q / 340 kkal </h4>
                        <h6>Tərkibi:</h6>
                        <p>Pomidor, kahı, xiyar , bibər, <br /> toyuq, sezar sous</p>
                        <div className="product-details-stars">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <div className="product-details-price">
                            <h4>18 ₼</h4>
                            <span>25 ₼</span>
                        </div>
                        <div className="product-details-bottom">
                            <div className="product-count">
                                <button>+</button>
                                <h2 className='count'>1</h2>
                                <button>-</button>
                            </div>
                            <button className='favori'><CiHeart /></button>
                            <button className='sebet'><img src={sebetIconu} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails