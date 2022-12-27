import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './charactersSlice';

const store = configureStore({
  reducer: {
    charactersStore: charactersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
