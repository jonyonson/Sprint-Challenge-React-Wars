import React from 'react';
import './StarWars.css';

const Character = ({ characterName }) => {
  return <li className={'App__char-list__item'}>{characterName}</li>;
};

export default Character;
