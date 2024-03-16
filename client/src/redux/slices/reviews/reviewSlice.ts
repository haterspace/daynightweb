import { createSlice } from '@reduxjs/toolkit';
import { createNewReviewThunk, getReviewsThunk } from './reviewThunk';
import type { ReviewType } from '../../../types/reviewType';

type ReviewState = ReviewType[];
const initialState: ReviewState = [];

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviewsThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getReviewsThunk.rejected, (state, action) => []);

    builder.addCase(createNewReviewThunk.fulfilled, (state, action) => [...state, action.payload]);
    builder.addCase(createNewReviewThunk.rejected, (state, action) => [...state]);
  },
});

export default reviewSlice.reducer;
