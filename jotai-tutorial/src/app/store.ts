import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import count from '../reducers/count';

const reducer = {
  count,
};

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
