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
                {property.address}
                <br />
                {property.property}
                <br />
                <i class="fa">&#xf236; </i>
                {property.bedrooms} <i class="fa">&#xf2cd; </i>
                {property.bathrooms}
                {/* <img src={property.imageUrls} alt='property'/> */}
              </Link>
            ))}
      </div>
    </div>
  );
}

export default ForRent;
