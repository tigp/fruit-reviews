/* eslint no-param-reassign: "error" */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  async (_, { rejectWithValue }) => {
    const url = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9,10,11,12,13,14,15';
    const response = await fetch(url);
    if (response.status !== 200) {
      return rejectWithValue('Failed to fetch data!');
    }
    const data = await response.json();
    return data;
  },
);

interface CharactersState {
  characters: Character[];
  loading: true | false;
  activeCharacter: number;
  error?: null | string;
}

const initialState = {
  characters: [],
  loading: false,
  activeCharacter: 0,
  error: null,
} as CharactersState;

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    switchCharacter: (state, { payload }: PayloadAction<number>) => {
      state.activeCharacter += payload;
      if (state.activeCharacter >= state.characters.length) {
        state.activeCharacter = 0;
      } else if (state.activeCharacter < 0) {
        state.activeCharacter = state.characters.length - 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.characters = payload;
        state.error = null;
      })
      .addCase(fetchCharacters.rejected, (state, { payload }: any) => {
        state.loading = false;
        if (payload) {
          state.error = payload.message;
        }
      });
  },
});

export { fetchCharacters };
export const { switchCharacter } = charactersSlice.actions;
export const charactersSelector = (state: RootState) => state.charactersStore;
export default charactersSlice.reducer;
