import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GirlType } from '../../../types/girlType';
import { getGirls, getPickedGirl } from '../../../services/girlService';

export const getGirlsThunk = createAsyncThunk<GirlType[]>('girls/getGirlsThunk', () => getGirls());

export const getPickedGirlThunk = createAsyncThunk<GirlType, GirlType['id']>(
  'girls/getPickedGirlThunk',
  (id) => getPickedGirl(id),
);
