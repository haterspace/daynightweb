import type { GirlType } from '../types/girlType';
import type { ReviewFormType, ReviewType } from '../types/reviewType';
import apiService from './config';

export const getReviews = async (id: GirlType['id']): Promise<ReviewType[]> => {
  const { data } = await apiService<ReviewType[]>(`/reviews/${id}`);
  return data;
};

export const createNewReview = async (id: GirlType['id'], formData: ReviewFormType): Promise<ReviewType> => {
  const { data } = await apiService.post<ReviewType>(`/reviews/${id}`, formData);
  return data;
};
