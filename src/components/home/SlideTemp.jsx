import React from 'react'

import mainSlideImage from "../../assets/images/home/main-slide-image.svg"

const SlideTemp = () => {
  return (
    <div className="home-main-slide">
    <div className="main-slide-image"><img src={mainSlideImage} alt="" /></div>
    <div className="main-slide-content">
        <div className="main-slide-left">
            <h1>BURGER KİNG</h1>
            <h2>Seçilmiş <span>yeməklərə</span><br /> 30% endirim</h2>
            <a href="#">İndi al</a>
        </div>
        <div className="main-slide-endirim">30%</div>
    </div>
</div>
  )
}

export default SlideTemp