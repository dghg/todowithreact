// Root Reducer
import {combineReducers} from 'redux';
import TodoReducer, {TodoState} from './todos';

export interface rootState {
  todos: TodoState;
}

export default combineReducers({
  todos: TodoReducer
})