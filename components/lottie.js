import React, { useState } from 'react';
import Lottie from 'lottie-react';
import squirtleAnimation from '../public/pokemon.json';

const Squirtle = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleClick = () => {
    setRotationAngle(rotationAngle + 720);
    console.log("click");
  };

  return (
    <div className='squirtle' onClick={handleClick} style={{ transform: `rotate(${rotationAngle}deg)` }}>
      <Lottie animationData={squirtleAnimation} />
    </div>
  );
};

export default Squirtle;


