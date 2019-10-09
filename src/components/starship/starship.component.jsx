import React from 'react';

import { Link } from 'react-router-dom';

const Starchip = ({ image, name, linkUrl }) => {
  return (
    <Link to={`/starships/${linkUrl}`}>
      <img src={image} alt={name}></img>
      <h2>{name}</h2>
    </Link>
  );
};

export default Starchip;
