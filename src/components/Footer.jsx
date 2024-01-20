import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="card1">
        <div className="footer1">
        <Link to="/blog" className="para1">Our Blog</Link>
        </div>
        <div className="footer2">
        <p className="para2">
            <Link to="/our-team" className="para2">Our Team</Link>

          </p>
        </div>
        </div>

        <div className="rights">
          <p className="para3">2024 Find My Next Home. All rights reserved.</p>
        </div>
        <div className="top"><ScrollToTop smooth/></div>
      </div>
    </>
  );
}

export default Footer;
