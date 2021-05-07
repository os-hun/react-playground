import { appReducer } from './reducers';
import { AppSelectors } from './selectors';
import { IApp, LoginUser, Toast, Action } from './types';
import { ACTIONS, set_loading, set_unloading } from './actions';

const AppActions = {
  set_loading,
  set_unloading,
};

export type {
  IApp,
  LoginUser,
  Toast,
  Action,
}

export {
  appReducer,
  AppSelectors,
  AppActions,
  ACTIONS,
};

