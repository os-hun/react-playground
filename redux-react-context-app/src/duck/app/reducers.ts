import { IApp, Action } from './types';
import { ACTIONS } from './actions';

const initialState: IApp = {
  loading: false,
  login_user: null,
  toast: null,
}

export function appReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true }
    case ACTIONS.UNLOADING:
      return { ...state, loading: false }
    case ACTIONS.FETCH_LOGIN_USER:
      const payload = action.payload;
      return { ...state, login_user: payload };
    default:
      return state;
  }
}
