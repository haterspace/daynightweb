import { createSlice } from '@reduxjs/toolkit';
import { userCheckThunk, userLoginThunk, userLogoutThunk, userSignUpThunk } from './userThunk';
import type { UserLoadingType } from '../../../types/userType';

type UserState = UserLoadingType;
const initialState: UserState = { status: 'loading' };

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userCheckThunk.pending, (state, action) => ({ status: 'loading' }));
    builder.addCase(userCheckThunk.fulfilled, (state, action) => ({
      ...action.payload,
      status: 'logged',
    }));
    builder.addCase(userCheckThunk.rejected, (state) => ({ status: 'guest' }));

    builder.addCase(userSignUpThunk.fulfilled, (state, action) => ({
      ...action.payload,
      status: 'logged',
    }));
    builder.addCase(userSignUpThunk.rejected, (state) => ({ status: 'guest' }));

    builder.addCase(userLoginThunk.fulfilled, (state, action) => ({
      ...action.payload,
      status: 'logged',
    }));
    builder.addCase(userLoginThunk.rejected, (state) => ({ status: 'guest' }));

    builder.addCase(userLogoutThunk.fulfilled, (state) => ({ status: 'guest' }));
  },
});

export default userSlice.reducer;
