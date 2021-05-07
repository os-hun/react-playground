import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppSelectors, AppActions, IApp, LoginUser } from './app';

export type {
  IApp,
  LoginUser,
};

export const Selectors = () => {
  const app = AppSelectors();

  return {
    ...app,
  };
};

export const Actions = () => {
  const dispatch = useDispatch();
  const callback = useCallback((action: () => void) => {
    dispatch(action());
  }, [dispatch]);

  return {
    dispatch,
    callback,
    ...AppActions,
  };
};
