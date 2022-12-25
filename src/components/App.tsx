import React from 'react';

const App = () => {
  const first: string = 'First step!';
  // const api: string = https://rickandmortyapi.com/api/character/1,183
  return (
    <>
      <h1 className="font-color">{first}</h1>
      <ul className="font-color">
        <li><s>Add linter</s></li>
        <li><s>Add SASS</s></li>
        <li><s>Add Store</s></li>
        <li><s>Add Background for body</s></li>
        <li>Add slice</li>
        <li>Render container for buttons and card</li>
      </ul>
    </>
  );
};

export default App;
