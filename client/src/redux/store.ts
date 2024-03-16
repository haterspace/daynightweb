import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user/userSlice';
import girlReducer from './slices/girl/girlSlice';
import preferenceReducer from './slices/preferences/preferenceSlice';
import reviewReducer from './slices/reviews/reviewSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    girls: girlReducer,
    preferences: preferenceReducer,
    reviews: reviewReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
