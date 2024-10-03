import React from 'react'

import backgroundImg from "../../assets/images/home/categoryBackground.svg"
import chicken from "../../assets/images/home/categoryToyuq.svg"

const Categories = () => {
  return (
    <div className='home-categories'>
        <div className="home-categories-img"><img src={backgroundImg} alt="" /></div>
        <div className="categories">
            <img src={chicken} alt="" />
            <img src={chicken} alt="" />
            <img src={chicken} alt="" />
            <img src={chicken} alt="" />
            <img src={chicken} alt="" />
            <img src={chicken} alt="" />
            <img src={chicken} alt="" />
        </div>
    </div>
  )
}

export default Categories