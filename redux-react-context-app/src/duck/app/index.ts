import { appReducer } from './reducers';
import { AppSelectors } from './selectors';
import { IApp, LoginUser, Toast, Action } from './types';
import { ACTIONS, set_loading_action, set_unloading_action } from './actions';
import { fetch_login_user } from './operations';

const AppActions = {
  set_loading_action,
  set_unloading_action,
};

const AppOperations = {
  fetch_login_user,
}

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
  AppOperations,
  ACTIONS,
};

