import React from 'react';
import '../App.css'

/**
 *
 * Component that hold images we find on the internet
 *
 */

const BoxContainer = ({ images }) => {
  return (
    <div className="box-container">
      {images.map((image, index) => (
        <div key={index} className="image-box">
          <img src={image.src} alt={image.alt} className="image" />
        </div>
      ))}
    </div>
  );
};

export default BoxContainer;
