import { LoginUser, Toast } from './types';

export const ACTIONS = {
  FETCH_LOGIN_USER: 'FETCH_LOGIN_USER',
  LOADING: 'LOADING',
  UNLOADING: 'UNLOADING',
  SET_TOAST: 'SET_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

export function fetch_login_user_action(login_user: LoginUser) {
  return {
    type: ACTIONS.FETCH_LOGIN_USER,
    payload: login_user,
  }
}

export function set_loading_action() {
  return {
    type: ACTIONS.LOADING,
  };
}

export function set_unloading_action() {
  return {
    type: ACTIONS.UNLOADING,
  }
}

export function set_toast_action(toast: Toast) {
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
