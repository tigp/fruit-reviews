import React from 'react';
import { useSelector } from 'react-redux';

import { charactersSelector } from '../redux/charactersSlice';

const Character = () => {
  const { characters } = useSelector(charactersSelector);
  // console.log(characters);
  const targetChar = characters[0];

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
              {`Name: ${targetChar.name}`}
            </li>
            <li>
              <p>{`Gender: ${targetChar.gender}`}</p>
            </li>
            <li>
              <p>{`Species: ${targetChar.species}`}</p>
            </li>
            <li>
              <p>{`Status: ${targetChar.status}`}</p>
            </li>
          </ul>
        </>
      )}
      <button className="button" type="button">Click Me!</button>
    </div>
  );
};

export default Character;
