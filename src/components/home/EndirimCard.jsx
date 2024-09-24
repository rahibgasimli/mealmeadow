import React from 'react'

import cardPhoto1 from "../../assets/images/home/test3.png"

import { CiHeart,CiShoppingBasket } from "react-icons/ci";

const EndirimCard = () => {
  return (
    <div className='endirim-card'>
      <div className="endirim-card-top">
        <div className="endirim-card-image"><img src={cardPhoto1} alt="" /></div>
        <h4>15 %</h4>
      </div>
      <div className="endirim-card-content">
        <h2>Cio-Cio- san</h2>
        <h6>Vegan plate</h6>
        <p>Pomidor, kahı, xiyar, turp, göbələk, pancake...
      </p>
      </div>
      <div className="endirim-card-bottom">
        <div className="card-prices">
          <span className="price">25 ₼</span>
          <span className='endirimli-price'>18 ₼</span>
        </div>
        <div className="card-buttons">
        <a href="#" className='card-favori'><CiHeart/></a>
        <a href="#" className='card-sebet'><CiShoppingBasket/></a>
        </div>
      </div>
    </div>
  )
}

export default EndirimCard