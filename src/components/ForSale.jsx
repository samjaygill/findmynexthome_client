import React from 'react'
import { Link } from 'react-router-dom';

function ForSale({ properties }) {
  return (
    <div className='forsale-container'>
      {properties.sortedProperties &&
        properties.sortedProperties.map((property) => (
          <Link
            to={`/sale/${property._id}`}
            className="property-card"
            key={property._id}
          >
            {property.address}
          </Link>
        ))}
    </div>
  );
}

export default ForSale