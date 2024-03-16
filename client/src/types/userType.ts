export type UserType = {
  id: number;
  username: string;
  password: string;
  userType: string;
};

export type UserSignUpType = Omit<UserType, 'id'>;

export type UserLoginType = Omit<UserSignUpType, 'userType'>;

export type UserLoadingType =
  | (UserType & { status: 'logged' })
  | { status: 'loading' }
  | { status: 'guest' };
