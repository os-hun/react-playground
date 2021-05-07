import { combineReducers } from 'redux';
import { appReducer, IApp } from './app';

export type IStore = {
  app: IApp,
}

export default combineReducers({
  app: appReducer,
});
