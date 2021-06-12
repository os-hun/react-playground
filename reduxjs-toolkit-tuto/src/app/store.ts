import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import count from '../reducers/count';

export const store = configureStore({
  reducer: {
    count,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
