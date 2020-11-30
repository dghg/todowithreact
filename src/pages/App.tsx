import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Todo from './Todo';
import Container from '../containers/TodoContainer'
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`
const App: React.FunctionComponent = () => {
  return(
    <>
      <GlobalStyle />
      <Container />
    </>
  )
}


export default App;