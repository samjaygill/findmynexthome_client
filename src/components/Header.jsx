import React from "react";
import logo from "./images/logo.png";
import Navbar from "./Navbar";
import "./css/Header.css";

function Header() {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} alt="Logo" className="header-image" />
      </a>
      <Navbar />
    </div>
  );
}

export default Header;
