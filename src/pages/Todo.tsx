import React from 'react';
import TodoTemplate from '../component/TodoTemplate';
import TodoHead from '../component/TodoHead';
import TodoList from '../component/TodoList';
import TodoCreate from '../component/TodoCreate';
import {Props} from '../containers/TodoContainer'
const Todo: React.FunctionComponent<Props> = ({todos, FetchTodo, AddTodo, DeleteTodo, toggleTodo}) => {
  return (
    <TodoTemplate>
      <TodoHead todos={todos}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} DeleteTodo={DeleteTodo}/>
      <TodoCreate SubmitTodo={AddTodo}/>
    </TodoTemplate>
  )
}

export default Todo;