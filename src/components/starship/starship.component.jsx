import React from 'react';

import { withRouter } from 'react-router-dom';

const Starchip = ({ image, name, history, linkUrl, match }) => {
  return (
    <div onClick={() => history.push(`${match.url}/${linkUrl}`)}>
      <img src={image} alt={name}></img>
      <h2>{name}</h2>
    </div>
  );
};

export default withRouter(Starchip);
