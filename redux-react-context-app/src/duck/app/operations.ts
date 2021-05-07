import { Dispatch } from 'redux';
import {
  fetch_login_user_action,
  set_loading_action,
  set_unloading_action,
} from './actions';

export function fetch_login_user() {
  const user = {
    name: 'name',
    email: 'test@example.com',
    screen_name: 'screen_name',
    description: '',
    image: '',
  };

  return async (dispatch: Dispatch) => {
    dispatch(set_loading_action());
    dispatch(fetch_login_user_action(user));
    dispatch(set_unloading_action());
  }
}