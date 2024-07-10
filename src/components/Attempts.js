import React from 'react';
import './Attempts.css'; // Import the CSS file

/**
 * Attempts component to display the remaining attempts as dots.
 * 
 * @param {Object} props - The component props.
 * @param {number} props.attemptsLeft - The number of remaining attempts.
 * @returns {JSX.Element} The HTML for displaying the remaining attempts as dots.
 */
const Attempts = ({ attemptsLeft }) => {
  return (
    <div className="attempts">
      {[...Array(attemptsLeft)].map((_, index) => (
        <div key={index} className="attempt-dot"></div>
      ))}
    </div>
  );
};

export default Attempts;
