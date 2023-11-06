import { configureStore } from '@reduxjs/toolkit';
import gallarySlice from 'redux/features/gallary/gallarySlice';

export const store = configureStore({
  reducer: {
    gallary: gallarySlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
