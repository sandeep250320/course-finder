import React from "react";
import SelectTextFields from "./SelectSearch"
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div className="title">
          <h1>Course Finder</h1>  
        </div>
        <div className="count">
            <h3>
              Course Found : <span>500</span>
            </h3>
          </div>
      </div>
      <SelectTextFields/>
    </div>
  );
};

export default Header;
