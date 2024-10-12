import React from 'react'

import basketCardImg from "../../assets/images/products/basket-card.svg"
import countPlus from "../../assets/images/products/count-plus.svg"
import countMinus from "../../assets/images/products/count-minus.svg"

const BasketCard = ({name}) => {
    return (
        <div className='basket-card'>
            <div className="basket-card-left">
                <div className="basket-card-img"><img src={basketCardImg} alt="" /></div>
                <div className="basket-card-text">
                    <h3>{name}</h3>
                    <h6>18 ₼</h6>
                </div>
            </div>
            <div className="basket-card-count">
                <button><img src={countPlus} alt="" /></button>
                <h2 className='count'>1</h2>
                <button><img src={countMinus} alt="" /></button>
            </div>
        </div>
    )
}

export default BasketCard