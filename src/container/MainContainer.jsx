import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import ForSale from "../components/ForSale";
import ForRent from "../components/ForRent";
import FindUs from "../components/FindUs";
import ContactUs from "../components/ContactUs";
import MeetTheTeam from "../components/MeetTheTeam";

function MainContainer() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<ForSale />} />
        <Route path="/rent" element={<ForRent />} />
        <Route path="/find" element={<FindUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/our-team" element={<MeetTheTeam />} />

      </Routes>
    </Router>
  );
}

export default MainContainer;
