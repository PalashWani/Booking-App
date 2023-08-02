import React from 'react'
import './searchItem.css'
import IMG4 from './../../assets/avatar3.jpg'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const SearchItem = ({item}) => {
  const navigate = useNavigate()

  const handleNav= () => {
    navigate("/hotels/1")
  }
  return (
    <div>
      <div className="search__item">
        <img src={item.photos[0]} alt=""  className='si__img'/>
        <div className="si__desc">
          <h1 className="si__title">{item.name}</h1>
          <span className="si__distance">{item.distance}Km from Stadium</span>
          <span className="si__taxi">Economic taxi fare</span>
          <span className="si__subtitle">2 Bedroom Suite</span>
          <span className="si__features">{item.desc}</span>
          <span className="si__cancel">Free Cancellation</span>
        </div>
        <div className="si__details">
          {item.rating && <div className="si__rating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>}
          <div className="si__detials__text">
            <span className="si__price">Rs {item.cheapestPrice}</span>
            <span className="si__taxOp">Includes Taxes</span>
            {/* <button className="si__check__button searchNav" onClick={handleNav}>See Availability</button> */}
            <Link to={`/hotels/${item._id}`}>
            <button className="si__check__button searchNav" onClick={handleNav}>See Availability</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
