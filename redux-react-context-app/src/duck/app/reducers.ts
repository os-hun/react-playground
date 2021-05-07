import { IApp, Action } from './index';

export const ACTIONS = {
  LOADING: 'LOADING',
  UNLOADING: 'UNLOADING',
  FETCH_LOGIN_USER: 'FETCH_LOGIN_USER',
} as const;

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
