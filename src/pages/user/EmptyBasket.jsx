import React from 'react'

import emptyBasket from "../../assets/images/products/empty-basket.svg"

const EmptyBasket = () => {
  return (
    <div className='empty-basket'>
        <div className="empty-basket-img"><img src={emptyBasket} alt="" /></div>
        <h1>Hal-hazırda heç bir məhsul <span>yoxdur</span></h1>
        <a href="#"><button>Alış-veriş et</button></a>
    </div>
  )
}

export default EmptyBasket