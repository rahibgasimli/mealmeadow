import React from 'react'
import EndirimCard from './EndirimCard'

const EndirimliMehsullar = () => {
  return (
    <section className='endirim-mehsullar'>
        <h1><span>Endirimli</span>məhsullar</h1>
        <div className="endirim-mehsullar-top">
            <EndirimCard/>
            <EndirimCard/>
            <EndirimCard/>
            <EndirimCard/>
        </div>
        <div className="endirim-mehsullar-bottom">
            <EndirimCard/>
            <EndirimCard/>
            <EndirimCard/>
            <EndirimCard/>
        </div>
        <a href="#"><button>Daha  çox</button></a>
    </section>
  )
}

export default EndirimliMehsullar