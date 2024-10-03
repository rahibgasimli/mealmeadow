import React from 'react'

import emailOkey from "../../../assets/images/auth/ok.svg"

const EmailMessage = () => {
  return (
    <div className='pass-email-message'>
      <div className="pass-email-message-content">
        <div className="email-okey"><img src={emailOkey} alt="" /></div>
        <h1>E-mailə göndərildi</h1>
        <p>Şifrəni yeniləmək üçün təsdiq kodunuz e-mailinizə <br /> uğurla göndərildi</p>
      </div>
    </div>
  )
}

export default EmailMessage