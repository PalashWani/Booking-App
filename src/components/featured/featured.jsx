import React from "react";
import "./featured.css";
import IMG from "./../../assets/mumbai.jpeg";
import IMG2 from "./../../assets/delhi.jpg";
import IMG3 from "./../../assets/manali.jpeg";
import useFetch from "../../hooks/useFetch.js";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=mumbai,delhi,manali"
  );
  return (
    <div>
      <div className="featured">
        {loading ? (
          "Loading please Wait!"
        ) : (
          <>
            <div className="feature__item">
              <img className="featured__image" src={IMG} alt="" />
              <div className="featured__titles">
                <h2>Mumbai</h2>
                <h3>{data[0]}</h3>
              </div>
            </div>
            <div className="feature__item">
              <img className="featured__image" src={IMG2} alt="" />
              <div className="featured__titles">
                <h2>Delhi</h2>
                <h3>{data[1]}</h3>
              </div>
            </div>
            <div className="feature__item">
              <img className="featured__image" src={IMG3} alt="" />
              <div className="featured__titles">
                <h2>Manali</h2>
                <h3>{data[2]}</h3>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
