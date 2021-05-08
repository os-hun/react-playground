import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppSelectors, AppActions, AppOperations } from './app';

export type { IApp, LoginUser } from './app';

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
    ...AppOperations,
  };
};
