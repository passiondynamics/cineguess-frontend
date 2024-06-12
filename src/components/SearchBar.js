import React from 'react';
import '../App.css'
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input">
        <IoIosSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for a film"
          className="search-input"
        />
      </div>
      <button className="search-button">Submit</button>
    </div>
  );
};

export default SearchBar;
