import React from 'react';
import '../App.css';
import { GoDotFill } from "react-icons/go";
/**
 *
 * When a user gets an answer wrong after hitting submit in SearchBar.js, one dot should disappear.
 */

const Attempts = () => {
  return (
    //no official logic with this yet either
    <div className="attempts">
      <p>Attempts remaining: </p>
      <div className='dots'>
      <GoDotFill size={30}/>
      <GoDotFill size={30}/>
      <GoDotFill size={30}/>
      </div>
    </div>
  );
};

export default Attempts;
