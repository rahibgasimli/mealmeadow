import React from 'react'

import notFoundImg from "../../assets/images/home/empty.svg"
import EndirimCard from '../../components/home/EndirimCard'

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-image"><img src={notFoundImg} alt="" /></div>
      <h5>Hal-hazırda heç bir məhsul tapılmadı</h5>
      <div className="not-found-mehsullar">
        <h3 className='diger-mehsullar'>Digər<span> məhsullar</span></h3>
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