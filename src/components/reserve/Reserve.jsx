import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./reserve.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { SearchContext } from "../../context/searchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { date } = useContext(SearchContext);
  const navigate = useNavigate();

  //the dates which we get from date in useContext(SearchContext) is a range so we
  //need to extract indibisual dates from it
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const d = new Date(start.getTime()); // temp date to iterate over the range
    let list = []; //empty array to store each date in that range
    while (d <= end) {
      list.push(new Date(d).getTime());
      d.setDate(d.getDate() + 1);
    }
    return list;
  };
  //These are all the dates in that range
  //We now have to check which dates wether the selected date by the user lies in this unavailable range
  const allDates = getDatesInRange(date[0].startDate, date[0].endDate);
  //function to check wether the room is available at that date or not
  const isAvailable = (roomNumber) => {
    //'some' method is used to check which dates from allDates are present in unavailable Dates
    //If present we set isFound to true and which returning we return its inverse because
    //we want to disable the checkbox button if isFound is true.
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            date: allDates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <AiFillCloseCircle className="rClose" onClick={() => setOpen(false)} />
        <span>Select Your Rooms: </span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max People: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
