import React from 'react'
import './home.css'
import Navbar from './../../components/navbar/navbar'
import Header from './../../components/header/header'
import Featured from '../../components/featured/featured'
import Propertylist from '../../components/propertyList/Propertylist'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/maillist/MailList'
import Footer from '../../components/footer/Footer'


const home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="home__container">
        <Featured />
        <h1 className="home__title">Browse my Stays!</h1>
        <Propertylist/>
        <h1 className="home__title">Hotels Loved By Guests</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default home
