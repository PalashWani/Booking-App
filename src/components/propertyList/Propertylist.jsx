import React from 'react'
import './Propertylist.css'

import IMG2 from './../../assets/hotel1.jpeg'
import IMG3 from './../../assets/villa.jpeg'
import IMG4 from './../../assets/apartment.jpeg'
import IMG5 from './../../assets/resort.jpeg'
import IMG6 from  './../../assets/cabin.jpeg'

const Propertylist = () => {
  return (
    <div className='pList'>
        <div className="pList__item">
            <img className='pList__image' src={IMG2} alt="" />
            <div className="pList__titles">
                <h1>Hotels</h1>
                <h2>147 Hotels</h2>
            </div>
        </div>

        <div className="pList__item">
            <img className='pList__image' src={IMG3} alt="" />
            <div className="pList__titles">
                <h1>Villas</h1>
                <h2>229 Villas</h2>
            </div>
        </div>

        <div className="pList__item">
            <img className='pList__image' src={IMG4} alt="" />
            <div className="pList__titles">
                <h1>Apartments</h1>
                <h2>45 Apartments</h2>
            </div>
        </div>

        <div className="pList__item">
            <img className='pList__image' src={IMG5} alt="" />
            <div className="pList__titles">
                <h1>Resorts</h1>
                <h2>221 Resorts</h2>
            </div>
        </div>

        <div className="pList__item">
            <img className='pList__image' src={IMG6} alt="" />
            <div className="pList__titles">
                <h1>Cabins</h1>
                <h2>123 Cabins</h2>
            </div>
        </div>

    </div>
  )
}

export default Propertylist