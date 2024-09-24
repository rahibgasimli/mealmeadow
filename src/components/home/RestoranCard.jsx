import React from 'react'

import restoranCardImage from "../../assets/images/home/restoranCard.svg"

const RestoranCard = () => {
  return (
    <>
    <a href="#">
        <div className="restoran-card">
            <div className="restoran-card-image"><img src={restoranCardImage} alt="" /></div>
            <div className='restoran-card-border'><h1>Marivanna Baku</h1></div>
        </div>
    </a>
    </>
    
  )
}

export default RestoranCard