import { useReducer } from 'react';
import appReducer from '../context/appReducer';

export const useCustomReducer = () => {
  const [state, dispatch] = useReducer(
    appReducer.reducer,
    appReducer.initialState,
  );

  return { state, dispatch };
};
