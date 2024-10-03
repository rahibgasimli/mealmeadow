import React from 'react'

const ForgotPasswordEmail = () => {
  return (
    <div className='forgot-pass-email'>
        <form>
            <h3>Şifrəmi unutdum</h3>
            <label htmlFor="email">E-mail</label>
            <input type="email" className='email-input' placeholder='E-maili daxil et' required/>
            <button>Şifrəni yenilə</button>
        </form>
    </div>
  )
}

export default ForgotPasswordEmail