import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./css/OurBlog.css";

function OurBlog({ handleSearch, blogs }) {
  const [input, setInput] = useState("");

  const handleChange = (input) => {
    setInput(input);
    handleSearch(input);
  };

  return (
    <div className="blog-container">
      <div className="blog-card1">
        <FaSearch id="search-icon" className="search-icon" />
        <input
          type="text"
          className="input-search"
          placeholder="Search..."
          value={input}
          onChange={(event) => handleChange(event.target.value)}
        />
      </div>
      <div className="blog-card2">
        <div className="blog-main">
          {blogs.map((blog) => (
            <div key={blog.id} className="article">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-body">{blog.body}</p>
            </div>
          ))}
        </div>
        {/* <div className="article">One</div>
        <div className="article">Two</div>
        <div className="article">Three</div>
        <div className="article">Four</div>
        <div className="article">Five</div> */}
      </div>
    </div>
  );
}

export default OurBlog;
