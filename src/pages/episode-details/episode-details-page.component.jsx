import React from 'react';
// import ChatactersPage from '../characters/characters-page.component';

import {
  DetailsPageContainer,
  HeaderContainer,
  EpisodeImage,
  EpisodeTitleContainer,
  EpisodeId,
  EpisodeDetailsContainer,
  EpisodeDescription,
  EpisodeDetailsFooterContainer,
  CharactersContainer,
} from './episode-details-page-styles';

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
    <DetailsPageContainer>
      <HeaderContainer>
        <EpisodeImage src={image} alt={title}></EpisodeImage>
        <EpisodeTitleContainer>
          <EpisodeId>Star Wars: Episode {episodeId}</EpisodeId>
          <h2>{title}</h2>
        </EpisodeTitleContainer>
      </HeaderContainer>
      <EpisodeDetailsContainer>
        <EpisodeDescription>{openingCrawl}</EpisodeDescription>
        <EpisodeDetailsFooterContainer>
          <p>
            Director: <span>{director}</span>
          </p>
          <p>
            Release Date: <span>{releaseDate}</span>
          </p>
        </EpisodeDetailsFooterContainer>
      </EpisodeDetailsContainer>
      {/* <div>
        <ChatactersPage characters={people} />
      </div> */}
      <CharactersContainer>characters</CharactersContainer>
    </DetailsPageContainer>
  );
};

export default EpisodeDetaislPage;
