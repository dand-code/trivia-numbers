import styled, { createGlobalStyle } from 'styled-components';
// import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './_Welcome';
import Questions from './_Questions';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;

const MainWrapper = styled.main`
background-color: #282c34;
height: 100vh;
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: ${({ theme }) => { return theme.colors.primary }};
line-height: ${({ theme }) => theme.spacing[2]}rem;
`;

const Title = styled.h1`
text-transform: uppercase;
text-align: center;
`;

function App() {
  const question = 'Minha primeira pergunta';

  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Title>
          Trividado
        </Title>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/trivial" render={props => <Questions {...props} question={question} />} />
        </Switch>
      </MainWrapper>
    </>
  );
}

export default App;
