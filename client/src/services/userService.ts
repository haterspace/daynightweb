import type { UserLoginType, UserSignUpType, UserType } from '../types/userType';
import apiService from './config';

export const userSignUp = async (formData: UserSignUpType): Promise<UserType> => {
  const { data } = await apiService.post<UserType>('/user/signup', formData);
  return data;
};

export const userLogin = async (formData: UserLoginType): Promise<UserType> => {
  const { data } = await apiService.post<UserType>('/user/login', formData);
  return data;
};

export const userCheck = async (): Promise<UserType> => {
  const { data } = await apiService<UserType>('/user/check');
  return data;
};

export const userLogout = async (): Promise<void> => apiService('/user/logout');
