import React from 'react';
import '../App.css';

/**
 *
 * Displays when a user guesses the correct film
 */

const GameOverWin = () => {
    return (
      <div className='easy-win'>
        <p>Nice, you got it!</p>
        <h2 className='movie-name'>Interstellar</h2>
        <h3>Next game in | 12:02:12</h3>
      </div>
    );
  }

export default GameOverWin;
