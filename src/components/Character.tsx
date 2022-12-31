import React from 'react';
import { useSelector } from 'react-redux';

import { charactersSelector } from '../redux/charactersSlice';

const Character = () => {
  const { characters, activeCharacter } = useSelector(charactersSelector);
  const targetChar = characters[activeCharacter];

  return (
    <div className="grid-container">
      {targetChar && (
        <>
          <img
            src={targetChar.image}
            alt={targetChar.name}
            width="300"
            height="300"
          />
          <ul>
            <li>
              <p>
                <b>Name: </b>
                {targetChar.name}
              </p>
            </li>
            <li>
              <p>
                <b>Gender: </b>
                {targetChar.gender}
              </p>
            </li>
            <li>
              <p>
                <b>Species: </b>
                {targetChar.species}
              </p>
            </li>
            <li>
              <p>
                <b>Status: </b>
                {targetChar.status}
              </p>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Character;
