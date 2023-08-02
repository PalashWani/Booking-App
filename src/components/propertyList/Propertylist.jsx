import React from "react";
import "./Propertylist.css";

import IMG2 from "./../../assets/hotel1.jpeg";
import IMG3 from "./../../assets/villa.jpeg";
import IMG4 from "./../../assets/apartment.jpeg";
import IMG5 from "./../../assets/resort.jpeg";
import IMG6 from "./../../assets/cabin.jpeg";
import useFetch from "../../hooks/useFetch.js";

const Propertylist = () => {
  const images = [IMG2, IMG3, IMG4, IMG5, IMG6];
  const { data, loading, error } = useFetch("/hotels/countByType");
  console.log(data);
  return (
    <div className="pList">
      {loading ? (
        "Loading!"
      ) : (
        <>
          {data.map((item,i) => (
              <div className="pList__item" key={i}>
                <img className="pList__image" src={images[i]} alt="" />
                <div className="pList__titles">
                  <h1>{item?.type}</h1>
                  <h2>{item?.count}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Propertylist;
