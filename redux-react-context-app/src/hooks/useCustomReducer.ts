import { useReducer, useCallback } from 'react';
import appReducer from '../context/appReducer';

export const useCustomReducer = () => {
  const [state, dispatch] = useReducer(
    appReducer.reducer,
    appReducer.initialState,
  );

  const setUser = useCallback(() => {
    dispatch({
      type: 'setUser',
      payload: {
        name: 'test user',
        email: 'test@example.com'
      },
    })
  }, [dispatch]);

  return { state, dispatch, setUser };
};
