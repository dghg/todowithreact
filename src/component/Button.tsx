import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
display: inline-flex;
outline: none;
border: none;
border-radius: 4px;
color: white;
font-weight: bold;
cursor: pointer;
padding-left: 1rem;
padding-right: 1rem;

/* 크기 */
height: 2.25rem;
font-size: 1rem;

/* 색상 */
background: #228be6;
&:hover {
  background: #339af0;
}
&:active {
  background: #1c7ed6;
}

/* 기타 */
& + & {
  margin-left: 1rem;
}

`;

const Button: React.FunctionComponent = ({}) => {
  return(
    <div>
      <StyledButton>Button</StyledButton>
    </div>
  )
}

export default Button;