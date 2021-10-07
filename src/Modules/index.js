import { combineReducers } from 'redux';
import { cart } from './cart';
import { enableES5 } from 'immer';

enableES5();

const rootReducer = combineReducers({ cart });

export default rootReducer;
