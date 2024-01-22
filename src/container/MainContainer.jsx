import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import ForSale from "../components/ForSale";
import ForRent from "../components/ForRent";
import FindUs from "../components/FindUs";
import ContactUs from "../components/ContactUs";
import MeetTheTeam from "../components/MeetTheTeam";
import Footer from "../components/Footer";
import OurBlog from "../components/OurBlog";

function MainContainer() {
  const [properties, setProperties] = useState([]);

  // const addProperty = (submittedProperty) => {
  //   const updatedProperty = [...properties, submittedProperty];
  //   setProperties(updatedProperty);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/properties");
        const propertyData = await response.json();
        setProperties(propertyData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<ForSale properties={properties} />} />
        <Route path="/rent" element={<ForRent properties={properties} />} />
        <Route path="/find" element={<FindUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/our-team" element={<MeetTheTeam />} />
        <Route path="/blog" element={<OurBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default MainContainer;
