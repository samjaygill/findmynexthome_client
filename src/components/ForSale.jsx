import React from 'react'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import "./css/ForSale.css"

function ForSale({ properties }) {
  return (
<div className='forsale-container'>
  <div className='forsale-cards'>
    {properties &&
      properties
        .filter((property) => property.type === 'sale')
        .map((property) => (
          <Link
            to={`/sale/${property.id}`}
            className="property-card"
            key={property.id}
          >
            <img src={property.imageUrls[0]} alt='front of property' className='fs-img-big'/>
            {property.address}<br/>
            {property.property}<br/>
            <i class="fa">&#xf236;{" "}{property.bedrooms}</i>{" "}
            {" "}<i class="fa">&#xf2cd;{" "}{property.bathrooms}</i>

            {/* <img src={property.imageUrls} alt='property'/> */}
          </Link>
        ))}
  </div>
</div>
  );
}

export default ForSale