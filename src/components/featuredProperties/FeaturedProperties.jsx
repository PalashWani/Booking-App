import React from 'react'
import './featuredProperties.css'
// import IMG2 from './../../assets/avatar3.jpg'
import IMG1 from './../../assets/royal_orchid.jpeg'
import IMG2 from './../../assets/raddison.jpeg'
import IMG3 from './../../assets/gds.jpeg'
import IMG4 from './../../assets/hayyat.jpeg'
import useFetch from '../../hooks/useFetch.js'

const FeaturedProperties = () => {
    const images = [IMG1, IMG2, IMG3, IMG4];
    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  return (
    <div className='fp'>
        {loading ? ("Loading!") : <>{data.map(item =>(
        <div className="fp__item" key={item._id}>
            <img className='fp__image' src={item.photos[0]} alt="" />
            <span className="fp__name">{item.name}</span>
            <span className="fp__city">{item.city}</span>
            <span className="fp__price">Starting from Rs {item.cheapestPrice}</span>
            {item.rating && <div className="fp__rating">
                <button>{item.rating}</button>
                <span>Excellent</span>
            </div>}
        </div>))}</>}
    </div>
  )
}

export default FeaturedProperties