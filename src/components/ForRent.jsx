import React from "react";
import { Link } from "react-router-dom";
import "./css/ForRent.css";

function ForRent({ properties }) {
  return (
    <div className="forrent-container">
      <div className="forrent-cards">
        {properties &&
          properties
            .filter((property) => property.type === "rent")
            .map((property) => (
              <Link
                to={`/rent/${property.id}`}
                className="property-card"
                key={property.id}
              >
                <img
                  src={property.imageUrls[0]}
                  alt="front of property"
                  className="fs-img-big"
                />
                <div className="property-details">
                <h5 className="property-title">{property.address}</h5>
                {property.property}
                <br />
                <i className="fa">&#xf236; </i>
                {" "}{property.bedrooms} <i className="fa">&#xf2cd; </i>
                {" "}{property.bathrooms}</div>
                {/* <img src={property.imageUrls} alt='property'/> */}
              </Link>
            ))}
      </div>
    </div>
  );
}

export default ForRent;
