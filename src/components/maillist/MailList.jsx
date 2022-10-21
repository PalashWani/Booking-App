import React from 'react'
import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mail__title'>Get the best deals and offers!</h1>
        <span className="mail__desc">Subscribe to get the hottest deals sent to you</span>
        <div className="mail__input__container">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList