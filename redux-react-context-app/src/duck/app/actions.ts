import { LoginUser, Toast } from './types';

export const ACTIONS = {
  FETCH_LOGIN_USER: 'FETCH_LOGIN_USER',
  IS_LOADING: 'IS_LOADING',
  SET_TOAST: 'SET_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

export function fetch_login_user_action(login_user: LoginUser) {
  return {
    type: ACTIONS.FETCH_LOGIN_USER,
    payload: login_user,
  }
}

export function set_loading_action(is_loading = false) {
  return {
    type: ACTIONS.IS_LOADING,
    payload: is_loading,
  };
}

export function set_toast_action(toast: Toast | null) {
  return {
    type: ACTIONS.SET_TOAST,
    payload: toast,
  };
}

export function remove_toast_action() {
  return {
    type: ACTIONS.REMOVE_TOAST,
  }
}
