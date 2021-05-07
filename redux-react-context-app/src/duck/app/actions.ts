import { LoginUser } from './types';

export const ACTIONS = {
  LOADING: 'LOADING',
  UNLOADING: 'UNLOADING',
  FETCH_LOGIN_USER: 'FETCH_LOGIN_USER',
} as const;

export function fetch_login_user(login_user: LoginUser) {
  return {
    type: ACTIONS.FETCH_LOGIN_USER,
    payload: login_user,
  }
}

export function set_loading() {
  return {
    type: ACTIONS.LOADING,
  };
}

export function set_unloading() {
  return {
    type: ACTIONS.UNLOADING,
  }
}
