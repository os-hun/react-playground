import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './duck/reducer';

const enhancer = 
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducer, enhancer);