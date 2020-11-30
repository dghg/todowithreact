import React from 'react';
import styled from 'styled-components';
import {Todo} from '../model';
const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;
interface Props {
  todos: Todo[];
}
const TodoHeader: React.FunctionComponent<Props> = ({todos}) => {
  const today = new Date()
  const left = todos.reduce((acc,todo,idx)=>{if(!todo.done) {acc=acc+1} return acc},0)
  return (
    <TodoHeadBlock>
      <h1>{`${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()} 일`}</h1>
  <div className="tasks-left">{`할 일 ${left}개 남음`}</div>
    </TodoHeadBlock>
  )
}

export default TodoHeader;
