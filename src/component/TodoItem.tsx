import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import {Todo} from '../model';

interface Props {
  todo: Todo;
  toggleTodo: Function;
  deleteTodo: Function;
}

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

interface CheckCircleProps {
  done: boolean;
}
const CheckCircle = styled.div<CheckCircleProps>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) => props.done && css`border: 1px solid #38d9a9; color: #38d9a9;`}
`;
const TodoItem: React.FunctionComponent<Props> = (props) => {
  const {todo, toggleTodo, deleteTodo} = props;
  const handleToggleClick = (e: React.MouseEvent) => {
    toggleTodo(todo.id);
  }
  const handleRemoveClick = (e: React.MouseEvent) => {
    deleteTodo(todo.id);
  }
  return (
    <TodoItemBlock>
    <CheckCircle done={todo.done} onClick={handleToggleClick}>{todo.done && <MdDone />}</CheckCircle>
    <p>{todo.content}</p>
    <Remove onClick={handleRemoveClick}>
      <MdDelete />
    </Remove>
    </TodoItemBlock>

  )
}
export default TodoItem;
