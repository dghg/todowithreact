import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {Todo} from '../model';
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

interface Props {
  todos: Todo[];
  toggleTodo: Function;
  DeleteTodo: Function;
}

const TodoList: React.FunctionComponent<Props> = ({todos, toggleTodo, DeleteTodo}) => {
  return (
    <TodoListBlock>
    {todos.map((todo,idx)=>{
      return (<TodoItem key={idx} todo={todo} toggleTodo={toggleTodo} deleteTodo={DeleteTodo}/>)
    })}
    </TodoListBlock>
  )
}


export default TodoList;
