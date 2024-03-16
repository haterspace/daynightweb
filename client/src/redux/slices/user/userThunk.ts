import { createAsyncThunk } from '@reduxjs/toolkit';
import { userCheck, userLogin, userLogout, userSignUp } from '../../../services/userService';
import type { UserLoginType, UserSignUpType, UserType } from '../../../types/userType';

export const userSignUpThunk = createAsyncThunk<UserType, UserSignUpType>(
  'user/signUpThunk',
  (formData) => userSignUp(formData),
);

export const userLoginThunk = createAsyncThunk<UserType, UserLoginType>(
  'user/userLoginThunk',
  (formData) => userLogin(formData),
);

export const userCheckThunk = createAsyncThunk<UserType>('user/userCheckThunk', () => userCheck());

export const userLogoutThunk = createAsyncThunk('user/userLogoutThunk', () =>
  userLogout().then(() => undefined),
);
