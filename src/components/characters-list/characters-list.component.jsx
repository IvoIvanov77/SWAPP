import React from 'react';

import Character from '../../components/character/character.component';

const ChatactersList = ({ characters }) => {
  return (
    <div className="characters-overview">
      {characters.map(({ id, ...otherProps }) => (
        <Character key={id} linkUrl={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ChatactersList;
