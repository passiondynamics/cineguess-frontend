import React from 'react';
import '../App.css';
import { GoDotFill } from "react-icons/go";

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
