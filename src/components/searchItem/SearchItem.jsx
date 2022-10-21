import React from 'react'
import './searchItem.css'
import IMG4 from './../../assets/avatar3.jpg'
import { useNavigate } from "react-router-dom";

const SearchItem = () => {
  const navigate = useNavigate()

  const handleNav= () => {
    navigate("/hotels/1")
  }
  return (
    <div>
      <div className="search__item">
        <img src={IMG4} alt=""  className='si__img'/>
        <div className="si__desc">
          <h1 className="si__title">Balewadi Street Tower</h1>
          <span className="si__distance">2Km from Stadium</span>
          <span className="si__taxi">Economic taxi fare</span>
          <span className="si__subtitle">2 Bedroom Suite</span>
          <span className="si__features">2 Bedroom + 1 Bathroom</span>
          <span className="si__cancel">Free Cancellation</span>
        </div>
        <div className="si__details">
          <div className="si__rating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="si__detials__text">
            <span className="si__price">Rs 2000</span>
            <span className="si__taxOp">Includes Taxes</span>
            <button className="si__check__button searchNav" onClick={handleNav}>See Availability</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
