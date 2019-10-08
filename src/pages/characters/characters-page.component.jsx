import React from 'react';

import Character from '../../components/character/character.component';

const ChatactersPage = ({ characters }) => {
  return (
    <div className="characters-overview">
      {characters.map(({ id, ...otherProps }) => (
        <Character key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ChatactersPage;
