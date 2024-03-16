import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGirlPreferences } from '../../../services/preferenceService';
import type { PreferenceType } from '../../../types/preferenceType';
import type { GirlType } from '../../../types/girlType';

// eslint-disable-next-line import/prefer-default-export
export const getGirlPreferencesThunk = createAsyncThunk<PreferenceType[], GirlType['id']>(
  'preferences/getGirlPreferences',
  (id) => getGirlPreferences(id),
);
