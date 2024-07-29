import { configureStore } from "@reduxjs/toolkit";
import questionReducer from '../features/questionSlice';
import userReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    question: questionReducer,
    user: userReducer,
  },
});

export default store;