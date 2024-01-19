import React from "react";
import "./css/Home.css"

function Home() {
  return (
    <>
    <div className="home-container">
      <div className="intro">
        <h3 className="home-title">Welcome to Find My Next Home: Where Dreams Meet Doorsteps. </h3>
        <p className="home-paragraph">
          At Find My Next Home, we understand that finding the perfect home is
          more than just a transaction; it's the realization of your dreams and
          the beginning of a new chapter. As your trusted companion in the
          journey of home exploration, we take pride in presenting a seamless
          platform to discover homes for sale and rent across the enchanting
          landscapes of Scotland.
          <br />
          <br />
          Our mission is to transform the process of finding your next home into
          an exciting and joyful experience. Whether you're in pursuit of a cozy
          cottage in the Scottish Highlands, a modern apartment in Edinburgh, or
          a charming townhouse in Glasgow, our extensive listings are curated to
          match your unique aspirations.
          <br />
          <br />
          Explore, dream, and let your aspirations take flight as you navigate
          through our user-friendly interface. Find My Next Home is not just a
          platform; it's your gateway to the future you've always envisioned.
          Let the search for your next home be a delightful journey, and let us
          be your guide every step of the way.
        </p>
        <p className="closing-intro">Your dream home is just a click away!</p>
      </div>
      <div>
        <img src="https://i.ibb.co/GvJRSWx/Screenshot-2024-01-19-at-19-54-37.png" alt="house" className="home-img"/>
      </div>
    </div>
    <hr className="line"/>
    </>
  );
}
export default Home;
