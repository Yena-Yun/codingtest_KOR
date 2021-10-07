import { combineReducers } from 'redux';
import { cart } from './cart';
import { drag } from './drag';
import { enableES5 } from 'immer';

enableES5();

const rootReducer = combineReducers({ cart, drag });

export default rootReducer;
