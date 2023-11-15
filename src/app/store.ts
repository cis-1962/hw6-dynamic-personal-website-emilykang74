import { configureStore } from '@reduxjs/toolkit';
import introductionReducer from '../features/introductionSlice';
import postsReducer from '../features/postsSlice';

const store = configureStore({
  reducer: {
    introduction: introductionReducer,
    posts: postsReducer,
  },
});

export default store;
