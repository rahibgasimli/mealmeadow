import React from 'react'

import bravoCardImage from "../../assets/images/home/bravo-card.svg"


const BravoCard = () => {
  return (
    <div className="bravo-cards">
        <div className="bravo-card" id='card-1'>
            <div className="bravo-card-image"><img src={bravoCardImage} alt="" /></div>
            <a href="#"><button>İndi al</button></a>
        </div>
        <div className="bravo-card">
            <div className="bravo-card-image"><img src={bravoCardImage} alt="" /></div>
            <a href="#"><button>İndi al</button></a>
        </div>
    </div>
  )
}

export default BravoCard