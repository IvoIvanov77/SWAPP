import React from 'react';

import Starship from '../starship/starship.component';

const StarshipList = ({ starships }) => {
  return (
    <div>
      {starships.map(({ id, ...otherProps }) => (
        <Starship key={id} linkUrl={id} {...otherProps} />
      ))}
    </div>
  );
};

export default StarshipList;
