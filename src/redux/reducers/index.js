import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer';

export const Reducers = combineReducers({
    counterState: counterReducer
})