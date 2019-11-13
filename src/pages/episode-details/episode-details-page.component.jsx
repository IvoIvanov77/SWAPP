import React from 'react';
import ChatactersList from '../../components/characters-list/characters-list.component';

import {
  DetailsPageContainer,
  HeaderContainer,
  EpisodeImage,
  EpisodeTitleContainer,
  EpisodeDetailsContainer,
  EpisodeDescription,
  EpisodeDetailsFooterContainer,
  CharactersContainer,
} from './episode-details-page.styles';

const EpisodeDetaislPage = ({
  episode,
  characters,
  fetchMore,
  hasNextPage,
}) => {
  const {
    title,
    openingCrawl,
    image,
    director,
    releaseDate,
    episodeId,
  } = episode;
  return (
    <DetailsPageContainer>
      <HeaderContainer>
        <EpisodeImage src={image} alt={title}></EpisodeImage>
        <EpisodeTitleContainer>
          <h1>Star Wars: Episode {episodeId}</h1>
          <h3>{title}</h3>
        </EpisodeTitleContainer>
      </HeaderContainer>
      <EpisodeDetailsContainer>
        <EpisodeDescription>{openingCrawl}</EpisodeDescription>
        <EpisodeDetailsFooterContainer>
          <h3>
            Director: <span>{director}</span>
          </h3>
          <h3>
            Release Date: <span>{releaseDate}</span>
          </h3>
        </EpisodeDetailsFooterContainer>
      </EpisodeDetailsContainer>
      <CharactersContainer>
        <ChatactersList
          characters={characters}
          hasNextPage={hasNextPage}
          fetchMore={fetchMore}
        />
      </CharactersContainer>
    </DetailsPageContainer>
  );
};

export default EpisodeDetaislPage;
