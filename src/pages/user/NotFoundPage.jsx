import React from 'react'

import notFoundImg from "../../assets/images/home/empty.svg"
import EndirimCard from '../../components/home/EndirimCard'

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-image"><img src={notFoundImg} alt="" /></div>
      <h6>Hal-hazırda heç bir məhsul tapılmadı</h6>
      <div className="not-found-mehsullar">
        <h2>Digər<span> məhsullar</span></h2>
        <div className="not-found-cards">
          <EndirimCard/>
          <EndirimCard/>
          <EndirimCard/>
          <EndirimCard/>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage