import { MdDone } from 'react-icons/md';
import TodoList from '../component/TodoList';
import TodoTemplate from '../component/TodoTemplate';
import {Todo} from '../model';

// Define Action Type
const FETCH = 'todo/FETCH';
const ADD = 'todo/ADD';
const DELETE = 'todo/DELETE';
const TOGGLE = 'todo/TOGGLE';
// Define Action
interface FetchTodoAction {
  type: typeof FETCH;
  payload: Todo[];
}

interface AddTodoAction {
  type: typeof ADD;
  payload: string;
}

interface DeleteTodoAction {
  type: typeof DELETE;
  payload: number; 
}

interface toggleTodoAction {
  type: typeof TOGGLE;
  payload: number;
}

type TodoActions = FetchTodoAction | AddTodoAction | DeleteTodoAction | toggleTodoAction ;

// Define Action Creator
export const FetchTodo = (todos: Todo[]) => (
  {
    type: FETCH,
    payload: todos,
  }
)

export const AddTodo = (content: string) => (
  {
    type: ADD,
    payload: content,
  }
)

export const DeleteTodo = (id: number) => (
  {
    type: DELETE,
    payload: id,
  }
)

export const toggleTodo = (id: number) => (
  {
    type: TOGGLE,
    payload: id,
  }
)

// Define State

export interface TodoState {
  todos: Todo[];
}
const initialState: TodoState = {todos: []};

// Define Reducer
const reducer = (state=initialState, action:TodoActions) => {
  switch(action.type) {
    case FETCH:
      return {
        ...state,
        todos: action.payload,
      }
    case ADD:
      return {
        ...state,
        todos: [...state.todos, {id: state.todos.length, content: action.payload, done: false}]
      }
    case DELETE:
      const deleted_idx = state.todos.findIndex((todo)=>(todo.id===action.payload));
      return {
        ...state,
        todos: state.todos.filter((_,idx)=>idx!=deleted_idx)
      }
    case TOGGLE:
      const toggle_idx = state.todos.findIndex((todo)=>(todo.id===action.payload));
      state.todos[toggle_idx].done = !state.todos[toggle_idx].done
      return {
        ...state,
        todos: [...state.todos]
      }
    default:
      return state
  }
}

export default reducer