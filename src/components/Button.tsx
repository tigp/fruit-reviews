import React from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

const Button = (prop: { buttonName: string }) => {
  const { buttonName } = prop;
  const click = (): void => console.log(`${buttonName} clicked!`);

  return (
    <button
      onClick={click}
      className="btn"
      type="button"
    >
      {buttonName === 'Previous' ? <GrLinkPrevious /> : <GrLinkNext />}
    </button>
  );
};

export default Button;
