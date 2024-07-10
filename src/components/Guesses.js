import React from 'react';
import { IoIosClose, IoIosCheckmark } from "react-icons/io";
import './Guesses.css'; // Import the CSS file

/**
 * Guesses component to display the list of user's guesses.
 * 
 * @param {Object} props - The component props.
 * @param {Array<string>} props.guesses - Array of user's guesses.
 * @param {string} props.correctAnswer - The correct answer to compare guesses against.
 * @returns {JSX.Element} The HTML for displaying the list of guesses.
 */
const Guesses = ({ guesses = [], correctAnswer }) => {
  return (
    <div className="guesses">
      <ul>
        {guesses.slice(0).reverse().map((guess, index) => {
          const isCorrect = guess.toLowerCase() === correctAnswer.toLowerCase();
          return (
            <li key={index} className={isCorrect ? 'correct' : 'incorrect'}>
              <span className="icon">{isCorrect ? <IoIosCheckmark /> : 'X'}</span> {/* Display 'X' or checkmark */}
              {guess}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Guesses;