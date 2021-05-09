import { Dispatch } from 'redux';
import {
  fetch_login_user_action,
  set_toast_action,
} from './actions';
import { client } from '../../client';

export function fetch_login_user() {
  return async (dispatch: Dispatch) => {
    const res = await client.v1.u._screenName('user_1').get();
    console.log(res);
    dispatch(fetch_login_user_action(res.body as any));
  }
}

export function set_toast (toast = null) {
  return (dispatch: Dispatch) => {
    dispatch(set_toast_action(toast));
  }
}
