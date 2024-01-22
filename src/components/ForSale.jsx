import React from 'react'
import { Link } from 'react-router-dom';

function ForSale({ properties }) {
  return (
    <div className='forsale-container'>
      {properties &&
        properties.map((property) => (
          <Link
            to={`/sale/${property.id}`}
            className="property-card"
            key={property.id}
          >
            {property.address}
          </Link>
        ))}
            For Sale

      
    </div>
  );
}

export default ForSale