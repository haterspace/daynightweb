import { createSlice } from '@reduxjs/toolkit';
import type { GirlType } from '../../../types/girlType';
import { getGirlsThunk, getPickedGirlThunk } from './girlThunk';

type GirlsState = GirlType[];
const initialState: GirlsState = [];

export const girlsSlice = createSlice({
  name: 'girls',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGirlsThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getGirlsThunk.rejected, (state, action) => []);

    builder.addCase(getPickedGirlThunk.fulfilled, (state, action) => [action.payload]);
  },
});

export default girlsSlice.reducer;
