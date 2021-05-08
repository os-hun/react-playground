import { Dispatch } from 'redux';
import {
  fetch_login_user_action,
} from './actions';
import { client } from '../../client';

export function fetch_login_user() {
  return async (dispatch: Dispatch) => {
    const res = await client.v1.u._screenName('user_1').get();
    console.log(res);
    dispatch(fetch_login_user_action(res.body as any));
  }
}
