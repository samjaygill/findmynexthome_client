import React from 'react'
import { Link } from 'react-router-dom';
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
            {property.address}
            {/* <img src={property.imageUrls} alt='property'/> */}
          </Link>
        ))}
  </div>
</div>
  );
}

export default ForSale