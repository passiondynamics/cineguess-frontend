import React from 'react';
import '../App.css';


const GameOver = () => {
    return (
      <div className='nice-try'>
        <p>Nice try, the correct answer was:</p>
        <h2 className='movie-name'>Interstellar</h2>
        <h3>Next game in | 12:02:12</h3>
      </div>
    );
  }

export default GameOver;
