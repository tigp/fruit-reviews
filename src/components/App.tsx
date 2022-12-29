import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCharacters } from '../redux/charactersSlice';
import { AppDispatch } from '../redux';
import Character from './Character';
import Button from './Button';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <>
      <h1>Wubba Lubba Dub Dub!</h1>
      <Character />
      <div className="flex-container">
        <Button buttonName="Previous" />
        <Button buttonName="Next" />
      </div>
    </>
  );
};

export default App;
