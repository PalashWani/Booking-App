import React, { useContext, useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/Header";
import { MdLocationOn } from "react-icons/md";
import MailList from "../../components/maillist/MailList";
import Footer from "../../components/footer/Footer";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/searchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  //useLocation is used to fetch the current req path
  const location = useLocation();
  //To seperate hotelId from the current req path
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  //Fetching date and options from contextApi
  const {date, options} = useContext(SearchContext)
  //Fetching the user wjo has logged in
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  //Function to calculate difference in dates
  const MILLISECONDS_PER_DAY = 1000*60*60*24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff/MILLISECONDS_PER_DAY);
    return diffDays
  }

  const days = dayDifference(date[0].endDate, date[0].startDate)
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = ()=> {
    if(user)
    {
      setOpenModal(true);
    }
    else
    {
      navigate("/login");
    }
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading"
      ) : (
        <div className="hotel__container">
          {open && (
            <div className="slider">
              <MdCancel className="close" onClick={() => setOpen(false)} />
              <FaArrowAltCircleLeft
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="silder__wrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="slider__img"
                />
              </div>
              <FaArrowAltCircleRight
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotel__wrapper">
            <button className="book__now" onClick={handleClick}>Reserve Or Book Now!</button>
            <h1 className="hotel__title">{data.name}</h1>
            <div className="location__address">
              <MdLocationOn />
              <span>{data.address}</span>
            </div>
            <span className="hotel__distance">
              Excellent Location - {data.distance}m from Railway Station
            </span>
            <span className="hotel__price__offer">
              Book a stay at {data.cheapestPrice} Now and get Free taxi to pick you up at the Airport
            </span>
            <div className="hotel__images">
              {data.photos?.map((photo, i) => (
                <div className="hotel__image__wrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotel__img"
                  />
                </div>
              ))}
            </div>
            <div className="hotel__details">
              <div className="hotel__details__texts">
                <h1 className="hotel__title">{data.title}</h1>
                <p className="hotel__desc">
                  {data.desc}
                </p>
              </div>
              <div className="hotel__details__price">
                <h1>Perfect for a {days} night's Stay</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  eveniet incidunt alias suscipit molestiae aliquam eius culpa
                  error id quod.
                </span>
                <h2>
                  <b>Rs {days*data.cheapestPrice*options.room}</b> ({days} Days)
                </h2>
                <button onClick={handleClick}>Reserve or Book now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
  );
};

export default Hotel;
