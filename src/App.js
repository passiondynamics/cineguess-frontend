import React from 'react';
import './App.css';
import BoxContainer from './components/BoxContainer';
import { IoIosInformationCircleOutline } from "react-icons/io";
import SearchBar from './components/SearchBar';
import Attempts from './components/Attempts';
import Guesses from './components/Guesses';
import GameOver from './components/GameOver';


const App = () => {
  //not official logic, placeholder until we get things connected
  const images = [
    { src: 'math.webp', alt: 'Image 1' },
    { src: 'tim.jpg', alt: 'Image 2' },
    { src: 'jess.jpg', alt: 'Image 3' },
    { src: 'an.jpg', alt: 'Image 4' },
  ];

  return (
    <div className="App">
        <div className='header'>
          <img src="cineguessLogo.PNG" width={250} height={50} alt="logo" className="logo" />
          <IoIosInformationCircleOutline size={30} />
          </div>
          <div className='game-content'>
        <BoxContainer images={images} />
    <Attempts />
        <div className='guess-container'>
          <SearchBar />
          <Guesses />




        </div>
      </div>
    </div>
  );
};

export default App;
