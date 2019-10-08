import React from 'react';

import Episode from '../../components/episode/episode.component';

const EpisodesPage = ({ episodes }) => {
  console.log(episodes);
  return (
    <div className="episodes-overview">
      {episodes.map(({ id, ...otherProps }) => (
        <Episode key={id} linkUrl={id} {...otherProps} />
      ))}
    </div>
  );
};

export default EpisodesPage;
