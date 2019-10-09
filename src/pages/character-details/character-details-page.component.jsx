import React from 'react';

import StarshipsList from '../../components/starships-list/starships-list.component';

const ChatacterDetaislPage = ({ person }) => {
  const { name, image, height, homeworld, species, starships } = person;
  const starshipsList = starships.edges.map(e => e.node);
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name}></img>
        <p>{height}</p>
        <p>{species.name}</p>
        <p>{homeworld.name}</p>
      </div>

      <div>
        <StarshipsList starships={starshipsList} />
      </div>
    </div>
  );
};

export default ChatacterDetaislPage;
