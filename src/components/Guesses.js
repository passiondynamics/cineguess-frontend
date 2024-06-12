import React from "react";

/**
 * This component should store/display the guesses after a user hits submit in SearchBar.js
 *
 */

const Guesses = () => {
    return (
        <div className="guesses">
         <div className="guesses-input">
        <input
          type="text"
          placeholder="This is where the guess will go"
          className="guesses-input"
        />
      </div>
          </div>
      );
};

export default Guesses;
