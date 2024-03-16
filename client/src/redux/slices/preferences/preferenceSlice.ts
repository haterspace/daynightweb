import { createSlice } from '@reduxjs/toolkit';
import type { PreferenceType } from '../../../types/preferenceType';
import { getGirlPreferencesThunk } from './preferenceThunk';

type PreferenceState = PreferenceType[];
const initialState: PreferenceState = [];

export const preferenceSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGirlPreferencesThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getGirlPreferencesThunk.rejected, (state, action) => []);
  },
});

export default preferenceSlice.reducer;
