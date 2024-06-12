import React from 'react';
import '../App.css'
import { IoIosSearch } from "react-icons/io";

/**This component will be used when the user searches for a film. When someone types
 * a name for a film, a list of films should appear above the search bar
 * for a user to click and submit.
 * */


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
