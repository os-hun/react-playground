import { createContext } from 'react';
import appReducer, { IApp } from './appReducer';

export const AppContext = createContext<IApp>(appReducer.initialState);
