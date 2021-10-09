import { useReducer } from 'react';
import { initialLoginUserState } from './../context/loginUser.context';

type LoginUserState = {
  uid: string
  email: string
}

type ActionType = 'FETCH_LOGIN_USER' | 'LOGOUT'
export type Action = {
  type: ActionType
  payload?: LoginUserState
}

export const useLoginUser = () => {
  const [state, dispatch] = useReducer(loginUserReducer, initialLoginUserState);

  return {
    state,
    dispatch,
  }
}

function loginUserReducer(state: LoginUserState, action: Action) {
  switch (action.type) {
    case 'FETCH_LOGIN_USER':
      const login_user = action.payload;
      return { ...state, ...login_user };
    case 'LOGOUT':
      return { ...state, ...initialLoginUserState }
    default:
      return state;
  }
}
