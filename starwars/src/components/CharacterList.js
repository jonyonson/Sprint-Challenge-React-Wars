import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = ({ chars }) => {
  const characters = chars.map(char => <Character characterName={char.name} />);

  return <ul className="App__char-list">{characters}</ul>;
};

export default CharacterList;
