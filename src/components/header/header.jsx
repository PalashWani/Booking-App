import React, { useState } from "react";
import "./header.css";
import { MdHotel } from "react-icons/md";
import { FaPlane } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { FaMonument } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import {FaCalendarDay} from 'react-icons/fa'
import {BsPersonCircle} from 'react-icons/bs'
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";


const Header = ({type}) => {

  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }
]);

const [destination, setDestination] = useState("");
const [openOptions, setOpenOptions] = useState(false);
const [options, setOptions] = useState({
  adult: 1,
  children: 1,
  room: 1
});

const handleOption = (name, operation) => {
  setOptions((prev) => {
    return {
     ...prev,
      [name]: operation === "i" ? options[name] +1 : options[name] -1
    }
  })
}
const navigate = useNavigate()

const handleSearch = () => {
  navigate("/hotels" , {state: {destination,date,options}});
}
const handleNav = () => {
  navigate("/");
}
  return (
    <div className="header">
      <div className={type==="list" ? "header__container list__mode" : "header__container"}>
        <div className="header__list">
          <div className="header__list__items active stays" onClick={handleNav}>
            <MdHotel />
            <span>Stays</span>
          </div>
          <div className="header__list__items">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="header__list__items">
            <AiFillCar />
            <span>Car Rentals</span>
          </div>
          <div className="header__list__items">
            <FaMonument />
            <span>Attractions</span>
          </div>
          <div className="header__list__items">
            <FaTaxi />
            <span>Taxi</span>
          </div>
        </div>
        { type !== "list" &&
          <><h1 className="header__title">Discounts for Life? That's awesome</h1>
        <p className="header__description">get massive discounts on your travels. Book now with GoForIt!</p>
        <button className="header__button">Sign In / Register</button>
        <div className="header__search">
            <div className="header__search__item">
                <MdHotel className="header__icon"/>
                <input type="text" placeholder="Where are you going?!" className="header__search__input" onChange={(e) => {
                  setDestination(e.target.value)
                }} />

            </div>
            <div className="header__search__item">
                <FaCalendarDay className="header__icon"/>
                <span onClick={() => setOpenDate(!openDate)} className="header__search__text">
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                { openDate && <DateRange 
                editableDateInputs = {true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection= {false}
                ranges={date}
                className= "date"
                minDate = {new Date()}/>}
                
            </div>
            <div className="header__search__item">
                <BsPersonCircle className="header__icon"/>
                <span onClick={()=> setOpenOptions(!openOptions)} className="header__search__text">{`${options.adult} Adult . ${options.children} Children . ${options.room} Room`}</span>
                {openOptions && <div className="options">
                  <div className="option__item">
                    <span className="option__text">Adult</span>
                    <div className="optionCounter">
                      <button disabled={options.adult <=1} className="option__counter__button" onClick={() => handleOption("adult", "d")}>-</button>
                      <spaan className="option__counter__number">{options.adult}</spaan>
                      <button className="option__counter__button" onClick={() => handleOption("adult", "i")}>+</button>
                    </div>
                  </div>

                  <div className="option__item">
                    <span className="option__text">Children</span>
                    <div className="optionCounter">
                      <button disabled={options.children <=0} className="option__counter__button" onClick={() => handleOption("children", "d")}>-</button>
                      <spaan className="option__counter__number">{options.children}</spaan>
                      <button className="option__counter__button" onClick={() => handleOption("children", "i")}>+</button>
                    </div>
                  </div>

                  <div className="option__item">
                    <span className="option__text">room</span>
                    <div className="optionCounter">
                      <button disabled={options.room <=1} className="option__counter__button"onClick={() => handleOption("room", "d")}>-</button>
                      <spaan className="option__counter__number">{options.room}</spaan>
                      <button className="option__counter__button" onClick={() => handleOption("room", "i")}>+</button>
                    </div> 
                  </div>
                </div>}
            </div>

            <div className="header__search__item">
                <button className="header__button" onClick={handleSearch}>Search</button> 
            </div>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
