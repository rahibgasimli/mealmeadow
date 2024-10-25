import React from 'react'

import restoranCardImage from "../../assets/images/home/restoranCard.svg"

const RestoranCard = () => {
  return (
    <>
    <a href="#">
        <div className="restoran-card">
            <div className="restoran-card-image"><img src={restoranCardImage} alt="" /></div>
            <div className='restoran-card-border'><h2>Dominos</h2></div>
        </div>
    </a>
    </>
    
  )
}

export default RestoranCard