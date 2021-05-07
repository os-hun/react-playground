import { LoginUser } from './types';

export const ACTIONS = {
  LOADING: 'LOADING',
  UNLOADING: 'UNLOADING',
  FETCH_LOGIN_USER: 'FETCH_LOGIN_USER',
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
