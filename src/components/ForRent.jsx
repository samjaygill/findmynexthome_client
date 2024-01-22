import React from "react";
import { Link } from "react-router-dom";
import "./css/ForRent.css"

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
                {property.address}
                {/* <img src={property.imageUrls} alt='property'/> */}
              </Link>
            ))}
      </div>
    </div>
  );
}

export default ForRent;
