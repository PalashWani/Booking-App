import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch.js";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 99999}`
  );
  const handleClick = ()=> {
    reFetch()
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list__container">
        <div className="list__wrapper">
          <div className="list__search">
            <h1 className="list__title">Search</h1>
            <div className="ls__item">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="ls__item">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="ls__item">
              <label htmlFor="">Options</label>
              <div className="ls__option__items">
                <div className="ls__option__item">
                  <span className="ls__option__text">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    placeholder="Price"
                    className="ls__option__input"
                    onChange={e=> setMin(e.target.value)}
                  />
                </div>

                <div className="ls__option__item">
                  <span className="ls__option__text">
                    Max Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    placeholder="Price"
                    className="ls__option__input"
                    onChange={e=>setMax(e.target.value)}
                  />
                </div>

                <div className="ls__option__item">
                  <span className="ls__option__text">Adult</span>
                  <input
                    type="number"
                    placeholder={options.adult}
                    className="ls__option__input"
                  />
                </div>

                <div className="ls__option__item">
                  <span className="ls__option__text">Children</span>
                  <input
                    type="number"
                    placeholder={options.children}
                    className="ls__option__input"
                  />
                </div>

                <div className="ls__option__item">
                  <span className="ls__option__text">Room</span>
                  <input
                    type="number"
                    placeholder={options.room}
                    className="ls__option__input"
                  />
                </div>
              </div>
            </div>
            <button onChange={handleClick}>Search</button>
          </div>
          <div className="list__result">
            {loading ? (
              "Loading"
            ) : (
              <>
              {data.map(item=>(
                <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
