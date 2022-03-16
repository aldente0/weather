import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly';
import { weatherReducer } from './weatherReducer';

export const store = createStore(weatherReducer, composeWithDevTools());
