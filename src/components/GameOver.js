import React from 'react';
import '../App.css';

/**
 *
 * Displays when a user guesses the correct film or runs out of attempts
 */

const GameOver = () => {
    return (
      <div className='nice-try'>
        <p>Nice one, the correct answer is:</p>
        <h2 className='movie-name'>Interstellar</h2>
        <h3>Next game in | 12:02:12</h3>
      </div>
    );
  }

export default GameOver;
