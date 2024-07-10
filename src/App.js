import { IoIosInformationCircleOutline } from "react-icons/io";
import React, { useState } from 'react';
import Attempts from './components/Attempts';
import BoxContainer from './components/BoxContainer';
import GameOver from './components/GameOver';
import Guesses from './components/Guesses';
import SearchBar from './components/SearchBar';
import './App.css';

/**
 * Main application component.
 *
 * @returns {JSX.Element} The HTML for the main application.
 */
const App = () => {
  // State variables
  const [guesses, setGuesses] = useState([]); // Initialize as an empty array
  const [attempts, setAttempts] = useState(3); // Initial attempts set to 3
  const [isGameOver, setIsGameOver] = useState(false);

  const images = [
    { src: 'math.webp', alt: 'Image 1' },
    { src: 'tim.jpg', alt: 'Image 2' },
    { src: 'jess.jpg', alt: 'Image 3' },
    { src: 'an.jpg', alt: 'Image 4' },
  ];

  // Example suggestions
  const suggestions = [
    "Movie 1",
    "Movie 2",
    "Movie 3",
    "Movie 4"
  ];

  // The correct answer
  const correctAnswer = "Movie 4";

  /**
   * Handles a user's guess.
   * 
   * @param {string} guess - The user's guess.
   */
  const handleGuess = (guess) => {
    setGuesses([...guesses, guess]);

    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
      setIsGameOver(true);
    } else {
      setAttempts(attempts - 1);
      if (attempts - 1 <= 0) {
        setIsGameOver(true);
      }
    }
  };

  return (
    <div className="App">
      <div className='header'>
        <img src="cineguessLogo.PNG" width={250} height={50} alt="logo" className="logo" />
        <IoIosInformationCircleOutline size={30} />
      </div>
      <div className='game-content'>
        {isGameOver ? (
          <GameOver />
        ) : (
          <>
            <BoxContainer images={images} />
            <Attempts attemptsLeft={attempts} />
            <div className='guess-container'>
              <SearchBar onGuess={handleGuess} suggestions={suggestions} />
              <Guesses guesses={guesses} correctAnswer={correctAnswer} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
