import React from 'react';

const Character = ({ image, name }) => {
  return (
    <div>
      <img src={image} alt={name}></img>
      <h2>{name}</h2>
    </div>
  );
};

export default Character;
