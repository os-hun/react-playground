import React, { useContext } from 'react';
import { Action } from '../hooks/useLoginUser';

interface LoginUserContextType {
  uid: string
  email: string
  dispatch: React.Dispatch<Action>
}

const initialLoginUserState = {
  uid: '',
  email: '',
}

const LoginUserContext = React.createContext<LoginUserContextType>({
  ...initialLoginUserState,
  dispatch: () => {},
});

const useLoginUserContext = () => useContext(LoginUserContext);

export { initialLoginUserState, useLoginUserContext }
export default LoginUserContext;

