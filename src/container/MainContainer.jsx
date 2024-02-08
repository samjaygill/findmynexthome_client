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
import PropertyCard from "../components/PropertyCard";

function MainContainer() {
  const [properties, setProperties] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/blogs");
        const blogData = await response.json();
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (input) => {
    const results = blogs.filter((blog) => {
      const lowerInput = input.toLowerCase();

      return (
        blog.title.toLowerCase().includes(lowerInput) ||
        blog.body.toLowerCase().includes(lowerInput)
      );
    });

    setFilteredResults(results);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<ForSale properties={properties} />} />
        <Route
          path="/sale/:id"
          element={<PropertyCard properties={properties} />}
        />
        <Route path="/rent" element={<ForRent properties={properties} />} />
        <Route
          path="/rent/:id"
          element={<PropertyCard properties={properties} />}
        />
        <Route path="/find" element={<FindUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/our-team" element={<MeetTheTeam />} />
        <Route
          path="/blog"
          element={
            <OurBlog
              blogs={filteredResults.length ? filteredResults : blogs}
              handleSearch={handleSearch}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default MainContainer;
