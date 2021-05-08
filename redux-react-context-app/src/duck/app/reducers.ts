import { IApp, Action } from './types';
import { ACTIONS } from './actions';

const initialState: IApp = {
  loading: false,
  login_user: null,
  toast: null,
}

export function appReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ACTIONS.FETCH_LOGIN_USER:
      const login_user = action.payload;
      return { ...state, login_user };
    case ACTIONS.IS_LOADING:
      const loading = action.payload;
      return { ...state, loading };
    case ACTIONS.SET_TOAST:
      const toast = action.payload;
      return { ...state, toast };
    case ACTIONS.REMOVE_TOAST:
      return { ...state, toast: null };
    default:
      return state;
  }
}
