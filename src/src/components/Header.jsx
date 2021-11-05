import React from "react";
import Navbar from "./Filter"
import "./Header.css";

const Header = ({count}) => {
  return (
    <div>
      <div className="navbar1">
        <div className="title">
          <h1>Course Finder</h1>  
        </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default Header;
