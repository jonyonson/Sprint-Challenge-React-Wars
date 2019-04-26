import React from 'react';
import './StarWars.css';

const Character = ({ characterName }) => {
  return (
    <li className={'App__char-list__item'} key={characterName}>
      {characterName}
    </li>
  );
};

export default Character;
