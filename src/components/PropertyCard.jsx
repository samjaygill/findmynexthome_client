import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./css/PropertyCard.css";

function PropertyCard({ properties }) {
  const { id } = useParams();
  const property = properties.find(
    (property) => property.id === parseInt(id, 10)
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigateToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.imageUrls.length - 1 : prevIndex - 1
    );
  };

  const navigateToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };


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
          {/* Current Image */}
          <button className="nav-button left" onClick={navigateToPreviousImage}>
            &lt;
          </button>
          <img
            src={property.imageUrls[currentImageIndex]}
            alt={`property-${currentImageIndex}`}
            className="pc-image"
          />
          {/* Navigation Buttons */}

          <button className="nav-button right" onClick={navigateToNextImage}>
            &gt;
          </button>
        </div>
        <div className="pc-info">
          <h3 className="pc-heading">
            {property.address}, {property.town}
          </h3>
          <div className="pc-details">
            <p className="bath-bed"><i className="fa">&#xf236; </i> {property.bedrooms}{" "}
            <i className="fa">&#xf2cd; </i> {property.bathrooms}</p>
            <p className="pc-type">{property.property}</p>

            </div>
            {property.description}

          
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
