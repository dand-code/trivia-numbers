import styled, { createGlobalStyle } from 'styled-components';
import React, { useState } from 'react';
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
  const questions = [
    { "question": "Is the number of dimensions of a line.", "answer": "1" },
    { "question": "Is the number of polynucleotide strands in a DNA double helix.", "answer": "2" },
    { "question": "Is the number of sets needed to be won to win the whole match in volleyball.", "answer": "3" },
    { "question": "Is the highest score possible in Olympics gymnastics competitions.", "answer": "10" }
  ]

  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Title>
          Trividado
        </Title>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/trivial" render={props => <Questions {...props} questions={questions} />} />
        </Switch>
      </MainWrapper>
    </>
  );
}

export default App;
