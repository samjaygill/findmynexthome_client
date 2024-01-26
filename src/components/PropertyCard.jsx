import React from "react";
import { useParams } from "react-router-dom";
import "./css/PropertyCard.css";

function PropertyCard({ properties }) {
  const { id } = useParams();
  const property = properties.find(
    (property) => property.id === parseInt(id, 10)
  );

  if (!property) {
    return <div>No property found for the provided ID</div>;
  }

  return (
    <div className="pc-container">
      <div className="enquire">
        <button className="enquire-button">Enquire</button>
      </div>
      <div className="pc-card">
        <div className="pc-photos">
          <img
            src={property.imageUrls[0]}
            alt="property"
            className="pc-image"
          />
        </div>
        <div className="pc-info">
          <h3 className="pc-heading">
            {property.address}, {property.town}
          </h3>
          <p>
            {property.property}<br/>
            <i className="fa">&#xf236; </i> {property.bedrooms}{" "}
            <i className="fa">&#xf2cd; </i> {property.bathrooms}<br/>
            {property.description}

          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
