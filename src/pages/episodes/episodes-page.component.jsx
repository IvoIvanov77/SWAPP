import React from 'react';

import Episode from '../../components/episode/episode.component';
import { EpisodesOverview } from './episodes-page.styles';

const EpisodesPage = ({ episodes }) => {
  console.log(episodes);
  return (
    <EpisodesOverview className="episodes-overview">
      {episodes.map(({ id, ...otherProps }) => (
        <Episode key={id} linkUrl={id} {...otherProps} />
      ))}
    </EpisodesOverview>
  );
};

export default EpisodesPage;
