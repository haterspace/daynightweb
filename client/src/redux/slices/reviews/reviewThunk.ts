import { createAsyncThunk } from '@reduxjs/toolkit';
import { createNewReview, getReviews } from '../../../services/reviewService';
import type { ReviewFormType, ReviewType } from '../../../types/reviewType';
import type { GirlType } from '../../../types/girlType';

export const getReviewsThunk = createAsyncThunk<ReviewType[], GirlType['id']>(
  'reviews/getReviewsThunk',
  (id) => getReviews(id),
);

export const createNewReviewThunk = createAsyncThunk<
  ReviewType,
  { id: GirlType['id']; formData: ReviewFormType }
>('reviews/createNewReviewThunk', async ({ id, formData }) => createNewReview(id, formData));
