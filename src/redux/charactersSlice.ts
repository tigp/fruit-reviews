/* eslint no-param-reassign: "error" */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from './index';

type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string,
  },
  location: {
    name: string,
    url: string,
  },
  image: string,
  episode: string[],
  url: string,
  created: string,
};

const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character/1,2,3,4');
    return data;
  },
);

interface CharactersState {
  characters: Character[];
  loading: true | false;
  errors?: string | null; // optional field
}

const initialState = {
  characters: [],
  loading: false,
} as CharactersState;

const CharactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.characters = payload;
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.loading = false;
        // state.errors = null; add errors
      });
  },
});

export { fetchCharacters };
export const charactersSelector = (state: RootState) => state.characters;
export default CharactersSlice.reducer;
