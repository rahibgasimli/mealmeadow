import React from 'react'

import image from "../../assets/images/home/bizimle-elaqe.svg"

const Contact = () => {
  return (
    <div className="bizimle-elaqe">
        <div className="contact-image"><img src={image} alt="" /></div>
        <div className="contact-inputs">
            <h1>Bizimlə əlaqə</h1>
            <form action="" method='POST' className='contact-form'>
                <div className="inputs-top">
                    <input type="text" placeholder='Ad, Soyad' />
                    <input type="text" placeholder='E-mail'/>
                </div>
                <textarea name="" id="" placeholder='Mətn' fixed="true"></textarea>
                <button type="submit">Göndər</button>
            </form>
        </div>
    </div>
  )
}

export default Contact