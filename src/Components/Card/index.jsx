import React from "react";
import { Link } from "react-router-dom";

//import { getData, getDataById, getDataByProperty } from "../../Utils/get";

const Card = ({ id, housing, page }) => {
  return (
    <Link to={`/housing/${housing.id}`}>
      <div className="card" key={housing.id}>
        <img src={housing.cover} alt={housing.title} className="card-cover" />
        <div className="overlayCard">
          <div className="textCard">
            <div className="card-title ">{housing.title}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
