import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="home">
        Home
      </Link>
      <Link to="/sale" className="forsale">
        For Sale
      </Link>
      <Link to="/rent" className="forrent">
        For Rent
      </Link>
      <Link to="/find" className="find">
        Find Us
      </Link>
      <Link to="/contact" className="contact">
        Contact Us
      </Link>
      </div>
  );
}

export default Navbar;
