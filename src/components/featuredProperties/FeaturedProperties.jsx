import React from 'react'
import './featuredProperties.css'
import IMG2 from './../../assets/avatar3.jpg'
import IMG1 from './../../assets/royal_orchid.jpeg'
import IMG3 from './../../assets/raddison.jpeg'
import IMG4 from './../../assets/gds.jpeg'
import IMG5 from './../../assets/hayyat.jpeg'

const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className="fp__item">
            <img className='fp__image' src={IMG1} alt="" />
            <span className="fp__name">Royal Orchid</span>
            <span className="fp__city">Pune</span>
            <span className="fp__price">Starting from Rs.4000</span>
            <div className="fp__rating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fp__item">
            <img className='fp__image' src={IMG3} alt="" />
            <span className="fp__name">Raddison Blue</span>
            <span className="fp__city">Pune</span>
            <span className="fp__price">Starting from Rs.4000</span>
            <div className="fp__rating">
                <button>9.8</button>
                <span>Exquisite</span>
            </div>
        </div>

        <div className="fp__item">
            <img className='fp__image' src={IMG4} alt="" />
            <span className="fp__name">Grand GDS</span>
            <span className="fp__city">Delhi</span>
            <span className="fp__price">Starting from Rs.8000</span>
            <div className="fp__rating">
                <button>9.5</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fp__item">
            <img className='fp__image' src={IMG5} alt="" />
            <span className="fp__name">Hayyat Residency</span>
            <span className="fp__city">Mumbai</span>
            <span className="fp__price">Starting from Rs.15000</span>
            <div className="fp__rating">
                <button>9.3</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties