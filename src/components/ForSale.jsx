import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "./css/ForSale.css";

function ForSale({ properties }) {
  return (
    <div className="forsale-container">
      <div className="forsale-cards">
        {properties &&
          properties
            .filter((property) => property.type === "sale")
            .map((property) => (
              <Link
                to={`/sale/${property.id}`}
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
                  <i className="fa">&#xf236; </i> {property.bedrooms}{" "}
                  <i className="fa">&#xf2cd; </i> {property.bathrooms}
                  <p className="date">added on {property.date}</p>
                  <p className="price">
                    £{property.price.toLocaleString("en-GB")}
                  </p>
                </div>
                {/* <img src={property.imageUrls} alt='property'/> */}
              </Link>
            ))}
      </div>
    </div>
  );
}

export default ForSale;
