import React from 'react'

const NewPassword = () => {
  return (
    <div className='auth-new-password'>
      <div className="new-password-content">
        <form>
          <h1>Şifrəni yenilə</h1>
          <input type="password" placeholder='Yeni şifrə' required />
          <input type="password" placeholder='Şifrəni təkrar et' required />
          <button>Şifrəni yenilə</button>
        </form>
      </div>
    </div>
  )
}

export default NewPassword