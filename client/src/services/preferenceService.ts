import type { GirlType } from '../types/girlType';
import type { PreferenceType } from '../types/preferenceType';
import apiService from './config';

// eslint-disable-next-line import/prefer-default-export
export const getGirlPreferences = async (id: GirlType['id']): Promise<PreferenceType[]> => {
  const { data } = await apiService<PreferenceType[]>(`/preferences/${id}`);
  return data;
};
