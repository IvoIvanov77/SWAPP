import React from 'react';

const Episode = ({ image, title, openingCrawl }) => {
  return (
    <div>
      <img src={image} alt={title}></img>
      <h2>{title}</h2>
      <p>{openingCrawl}</p>
    </div>
  );
};

export default Episode;
