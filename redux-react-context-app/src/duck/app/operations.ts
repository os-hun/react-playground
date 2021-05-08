import { Dispatch } from 'redux';
import {
  fetch_login_user_action,
  set_toast_action,
} from './actions';
import { Toast } from './types';
import { client } from '../../client';

export function fetch_login_user() {
  return async (dispatch: Dispatch) => {
    const res = await client.v1.u.me.$get();
    console.log(res);
    dispatch(fetch_login_user_action(res));
  }
}

export function set_toast(status: Toast['status'], data: any) {
  return (dispatch: Dispatch) => {
    const { message } = data;
    dispatch(set_toast_action({ status, message }));
  };
}
