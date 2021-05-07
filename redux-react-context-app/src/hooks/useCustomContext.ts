import { useContext } from 'react';
import { AppContext } from '../context/appContext';

export const useCustomContext = () => {
  const state = useContext(AppContext);
  return { ...state }
};
