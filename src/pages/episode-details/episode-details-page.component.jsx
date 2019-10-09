import React from 'react';
// import ChatactersPage from '../characters/characters-page.component';

const EpisodeDetaislPage = ({ episode }) => {
  const {
    title,
    openingCrawl,
    image,
    director,
    releaseDate,
    // people,
    episodeId,
  } = episode;
  return (
    <div>
      <div>
        <img src={image} alt={title}></img>
        <h1>Star Wars: Episode {episodeId}</h1>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{openingCrawl}</p>
        <p>{director}</p>
        <p>{releaseDate}</p>
      </div>
      {/* <div>
        <ChatactersPage characters={people} />
      </div> */}
    </div>
  );
};

export default EpisodeDetaislPage;
