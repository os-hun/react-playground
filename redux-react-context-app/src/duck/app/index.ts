import {
  set_loading_action,
  set_toast_action,
  remove_toast_action,
} from './actions';
import { fetch_login_user, set_toast } from './operations';

export { appReducer } from './reducers';
export { AppSelectors } from './selectors';
export { ACTIONS } from './actions';
export type { IApp, LoginUser, Toast, Action } from './types';

export const AppActions = {
  set_loading_action,
  set_toast_action,
  remove_toast_action,
};

export const AppOperations = {
  fetch_login_user,
  set_toast,
}
