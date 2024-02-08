import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="intro">
          <h3 className="home-title">
            Welcome to Find My Next Home: Where Dreams Meet Doorsteps.{" "}
          </h3>
          <p className="home-paragraph">
            At Find My Next Home, we understand that finding the perfect home is
            more than just a transaction; it's the realization of your dreams
            and the beginning of a new chapter. As your trusted companion in the
            journey of home exploration, we take pride in presenting a seamless
            platform to discover homes for sale and rent across the enchanting
            landscapes of Scotland.
            <br />
            <br />
            Our mission is to transform the process of finding your next home
            into an exciting and joyful experience. Whether you're in pursuit of
            a cozy cottage in the Scottish Highlands, a modern apartment in
            Edinburgh, or a charming townhouse in Glasgow, our extensive
            listings are curated to match your unique aspirations.
            <br />
            <br />
            Explore, dream, and let your aspirations take flight as you navigate
            through our user-friendly interface. Find My Next Home is not just a
            platform; it's your gateway to the future you've always envisioned.
            Let the search for your next home be a delightful journey, and let
            us be your guide every step of the way.
          </p>
          <p className="closing-intro">Your dream home is just a click away!</p>
        </div>
        <div className="img-div">
          <img
            src="https://i.ibb.co/GvJRSWx/Screenshot-2024-01-19-at-19-54-37.png"
            alt="house"
            className="home-img"
          />
        </div>
      </div>
      <hr className="line" />
      <h3 className="choose-title">Why choose us?</h3>
      <div className="choose-us">
        <div className="why-us">
          <h4 className="why-title">RAPID PROPERTY SALES </h4>{" "}
          <p className="why-para">
            Experience the efficiency of our proven selling process with our
            comprehensive guide, ensuring a swift and successful sale for your
            property.
          </p>
        </div>
        <div className="why-us">
          <h4 className="why-title">TRANSPARENT SALES PACKAGES</h4>{" "}
          <p className="why-para">
            Choose from competitive percentage and fixed commission fees,
            coupled with industry-leading marketing packages, giving you full
            visibility and control over your selling journey.
          </p>
        </div>
        <div className="why-us">
          <h4 className="why-title">LOCAL INSIGHT, GLOBAL EXPERTISE</h4>{" "}
          <p className="why-para">
            Our dedicated team resides in and intimately knows their market
            locations. Beyond property details, we bring local insights that
            enhance your understanding and appreciation of your potential new
            home.
          </p>
        </div>
        <div className="why-us">
          <h4 className="why-title">RELIABLE RENTAL RETURNS</h4>{" "}
          <p className="why-para">
            Enjoy peace of mind with our exclusive rent guarantee, ensuring you
            receive your rental income on time, consistently, if your property
            is occupied.
          </p>
        </div>
        <div className="why-us">
          <h4 className="why-title">CELEBRATING EXCELLENCE</h4>{" "}
          <p className="why-para">
            Discover our award-winning service by exploring the accolades and
            recognitions we've earned. Trust us to deliver excellence in every
            aspect of your real estate journey.
          </p>
        </div>
        <div className="why-us">
          <h4 className="why-title">PERSONALISED SUPPORT</h4>{" "}
          <p className="why-para">
            Beyond industry standards, our team is dedicated to understanding
            your unique needs and preferences. Experience a service that goes
            beyond transactions to create a personalized, satisfying real estate
            experience.
          </p>
        </div>
      </div>
      <div className="button-div"> 
      <Link to="/our-team">
        <button className="team-button">Meet The Team!</button>
      </Link>
      </div>
      {/* <hr className="line" /> */}
    </>
  );
}
export default Home;
