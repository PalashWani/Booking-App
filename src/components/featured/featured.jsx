import React from 'react'
import './featured.css'
import IMG from './../../assets/mumbai.jpeg'
import IMG2 from './../../assets/delhi.jpg'
import IMG3 from './../../assets/manali.jpeg'

const Featured = () => {
  return (
    <div>
      <div className="featured">
        <div className="feature__item">
            <img className='featured__image' src={IMG} alt="" />
            <div className="featured__titles">
                <h2>Mumbai</h2>
                <h3>121 properties</h3>
            </div>
        </div>
        <div className="feature__item">
            <img className='featured__image' src={IMG2} alt="" />
            <div className="featured__titles">
                <h2>Delhi</h2>
                <h3>220 properties</h3>
            </div>
        </div>
        <div className="feature__item">
            <img className='featured__image' src={IMG3} alt="" />
            <div className="featured__titles">
                <h2>Manali</h2>
                <h3>87 properties</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
