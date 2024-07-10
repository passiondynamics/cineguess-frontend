import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file

/**
 * This component will be used when the user searches for a film. When someone types
 * a name for a film, a list of films should appear below the search bar
 * for a user to click and submit.
 * 
 * @param {Object} props - The component props.
 * @param {Function} props.onGuess - Function to handle the guess when the form is submitted or a suggestion is clicked.
 * @param {Array<string>} props.suggestions - Array of suggestions for the autocomplete feature.
 * @returns {JSX.Element} The HTML for the search bar with autocomplete functionality.
 */
const SearchBar = ({ onGuess, suggestions }) => {
  // inputValue is a state variable, setInputValue is a function to update it
  const [inputValue, setInputValue] = useState('');

  // filteredSuggestions is a state variable, setFilteredSuggestions is a function to update it
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // showSuggestions is a state variable, setShowSuggestions is a function to update it
  const [showSuggestions, setShowSuggestions] = useState(false);

  // This will handle editing the input changes and changing the suggestions with those inputs
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput); // updates userInput as the user is typing

    if (userInput) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(userInput.toLowerCase()) // Filters the suggestions array based on the input value.
      );
      setFilteredSuggestions(filtered); // sets the suggestions to the new filtered array
      setShowSuggestions(true); // set show suggestions to true when a user starts typing
    } else {
      setFilteredSuggestions([]); // when a user does not have an input set suggestions to nothing and show suggestions to false
      setShowSuggestions(false);
    }
  };

  // this will handle if a user clicks one of the suggestions
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  // this will handle the user clicking submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onGuess(inputValue);
    setInputValue('');
    setShowSuggestions(false);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Guess the movie"
          className="search-input"
        />
        <button type="submit" className="search-button">Guess</button>
      </form>
      {showSuggestions && inputValue && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)} className="suggestion-item">
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
