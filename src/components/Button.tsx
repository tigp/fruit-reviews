import React from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import { useDispatch } from 'react-redux';

import { switchCharacter } from '../redux/charactersSlice';

const Button = (prop: { buttonName: string }) => {
  const dispatch = useDispatch();
  const { buttonName } = prop;

  const toggleButton = () => (
    buttonName === 'Previous' ? dispatch(switchCharacter(-1)) : dispatch(switchCharacter(1))
  );

  return (
    <button
      onClick={toggleButton}
      className="btn"
      type="button"
    >
      {buttonName === 'Previous' ? <GrLinkPrevious /> : <GrLinkNext />}
    </button>
  );
};

export default Button;
