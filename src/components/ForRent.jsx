import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/ForRent.css";

function ForRent({ properties }) {
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterType, setFilterType] = useState("all");

  const handleSort = (propertyKey) => {
    if (sortBy === propertyKey) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(propertyKey);
      setSortOrder("asc");
    }
  };

  const handleFilter = (propertyType) => {
    setFilterType(propertyType);
  };

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return `${month}/${day}/${year}`;
  };

  const sortedAndFilteredProperties = properties
    .filter((property) => property.type === "rent")
    .filter(
      (property) => filterType === "all" || property.property === filterType
    )
    .sort((a, b) => {
      const aValue =
        sortBy === "date" ? new Date(parseDate(a[sortBy])) : a[sortBy];
      const bValue =
        sortBy === "date" ? new Date(parseDate(b[sortBy])) : b[sortBy];

      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });

  return (
    <div className="forrent-container">
      <div className="options">
        <div className="all">
          <button onClick={() => handleFilter("all")} className="all-button">
            Show All
          </button>
        </div>
        <div className="date-price">
          <p className="sort-title">Sort By:</p>
          <button onClick={() => handleSort("date")} className={sortBy === "date" ? "selected-sort" : "sort-button"}>
            Date
          </button>
          <button onClick={() => handleSort("price")} className="sort-button">
            Price
          </button>
        </div>
        <div className="property-type">
          <p className="type-title">Property Type:</p>
          <div className="flex-box">
            <button
              onClick={() => handleFilter("Detached")}
              className="type-button"
            >
              Detached
            </button>
            <button
              onClick={() => handleFilter("Semi-Detached")}
              className="type-button"
            >
              Semi-Detached
            </button>
            <button
              onClick={() => handleFilter("Terraced")}
              className="type-button"
            >
              Terraced
            </button>
            <button
              onClick={() => handleFilter("Bungalow")}
              className="type-button"
            >
              Bungalow
            </button>
            <button
              onClick={() => handleFilter("Flat")}
              className="type-button"
            >
              Flat
            </button>
          </div>
        </div>
      </div>
      <div className="forrent-cards">
        {sortedAndFilteredProperties.map((property) => (
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
                £{property.price.toLocaleString("en-GB")} p/m
              </p>
            </div>

            {/* <img src={property.imageUrls} alt='property'/> */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ForRent;
