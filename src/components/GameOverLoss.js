import React from 'react';
import '../App.css';

/**
 *
 * Displays when a user guesses the incorrect film
 */

const GameOverLoss = () => {
    return (
      <div className='nice-try'>
        <p>Not this time, the correct answer was:</p>
        <h2 className='movie-name'>Interstellar</h2>
        <h3>Next game in | 12:02:12</h3>
      </div>
    );
  }

export default GameOverLoss;
