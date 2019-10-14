import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  EpisodeContainer,
  ImageContainer,
  TitleContainer,
  DescriptionContainer,
} from './episode.styles';

const Episode = ({ image, title, openingCrawl, history, linkUrl, match }) => {
  return (
    <EpisodeContainer onClick={() => history.push(`${match.url}/${linkUrl}`)}>
      <ImageContainer src={image} alt={title}></ImageContainer>
      <TitleContainer>{title}</TitleContainer>
      <DescriptionContainer>{openingCrawl}</DescriptionContainer>
    </EpisodeContainer>
  );
};

export default withRouter(Episode);
