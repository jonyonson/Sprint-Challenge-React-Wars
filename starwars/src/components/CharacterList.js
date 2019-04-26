import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = ({ chars }) => {
  const characters = chars.map(char => (
    <Character key={char.name} characterName={char.name} />
  ));

  return <ul className="App__char-list">{characters}</ul>;
};

export default CharacterList;
