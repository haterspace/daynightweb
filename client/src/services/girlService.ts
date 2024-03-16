import type { GirlType } from '../types/girlType';
import apiService from './config';

export const getGirls = async (): Promise<GirlType[]> => {
  const { data } = await apiService<GirlType[]>('/girls');
  return data;
};

export const getPickedGirl = async (id: GirlType['id']): Promise<GirlType['id']> => {
  const { data } = await apiService<GirlType['id']>(`/girls/${id}`);
  return data;
};
