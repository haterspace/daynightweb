import type { UserType } from './userType';

export type ReviewType = {
  id: number;
  text: string;
  topPreference: string;
  createdAt: number;
  User: UserType;
};

export type ReviewFormType = Omit<ReviewType, 'id' | 'createdAt' | 'User'>;
