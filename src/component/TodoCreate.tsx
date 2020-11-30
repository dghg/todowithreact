import React, {useState} from 'react';
import styled from 'styled-components';
import {MdAdd} from 'react-icons/md';
import {AddTodo} from '../reducers/todos'
const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
interface Props {
  SubmitTodo: typeof AddTodo;
}
const TodoCreate: React.FunctionComponent<Props> = ({SubmitTodo}) => {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    SubmitTodo(value);
  }
  return (
    <InsertForm onSubmit={handleSubmit}>
      <Input autoFocus placeholder='할 일을 입력해주세요.' value={value} onChange={handleChange}/>
      <CircleButton><MdAdd /></CircleButton>
    </InsertForm>
  )
}

export default TodoCreate