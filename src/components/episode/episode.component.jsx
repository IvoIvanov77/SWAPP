import React from 'react';

import { withRouter } from 'react-router-dom';

const Episode = ({ image, title, openingCrawl, history, linkUrl, match }) => {
  return (
    <div onClick={() => history.push(`${match.url}/${linkUrl}`)}>
      <img src={image} alt={title}></img>
      <h2>{title}</h2>
      <p>{openingCrawl}</p>
    </div>
  );
};

export default withRouter(Episode);
