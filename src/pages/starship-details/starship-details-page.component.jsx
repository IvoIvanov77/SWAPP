import React from 'react';

import { default as StarshipInfo } from '../../components/starship-info/starship-info.container';

const StarshipDetailsPage = ({ match }) => {
  return (
    <div>
      <StarshipInfo starshipId={match.params.starshipId} />
    </div>
  );
};

export default StarshipDetailsPage;
