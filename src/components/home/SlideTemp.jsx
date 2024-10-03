import React from 'react'

import mainSlideImage from "../../assets/images/home/main-slide-image.svg"

const SlideTemp = () => {
  return (
    <div className="home-main-slide">
      <div className="main-slide-image"><img src={mainSlideImage} alt="" /></div>
      <button>İndi al</button>
    </div>
  )
}

export default SlideTemp