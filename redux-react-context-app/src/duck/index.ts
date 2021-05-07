import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppSelectors, AppActions, IApp, LoginUser } from './app';

export type {
  IApp,
  LoginUser,
};

const Selectors = () => {
  const app = AppSelectors();

  return {
    ...app,
  };
};

const Actions = () => {
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

export {
  Selectors,
  Actions,
};
