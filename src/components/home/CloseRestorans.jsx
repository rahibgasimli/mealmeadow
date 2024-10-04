import React from 'react'

import backgroundImage from "../../assets/images/home/yaxin-restoranlar.svg"
import RestoranCard from './RestoranCard'

const CloseRestorans = () => {
  return (
    <div className="yaxin-restoranlar">
        <div className="yaxin-restoranlar-image"><img src={backgroundImage} alt="" /></div>
        <div className="yaxin-restoranlar-content">
            <h1><span>Yaxın</span>restoranlar</h1>
            <div className="yaxin-restoranlar-cards">
            <div className="yaxin-restoranlar-top">
                <RestoranCard/>
                <RestoranCard/>
                <RestoranCard/>
            </div>
            <div className="yaxin-restoranlar-bottom">
                <RestoranCard/>
                <RestoranCard/>
                <RestoranCard/>
            </div>
            </div>

            <a href="#"><button>Daha  çox</button></a>
        </div>
    </div>
  )
}

export default CloseRestorans