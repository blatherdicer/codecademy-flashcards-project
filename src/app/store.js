import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/TopicsSlice.js';

export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
});
