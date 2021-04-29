import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
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
min-height: 100vh;
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
font-size: calc(10px + 1.5vmin);
color: ${({ theme }) => { return theme.colors.primary }};
line-height: ${({ theme }) => theme.spacing[2]}rem;
text-align: center;
`;

const Title = styled.h1`
text-transform: uppercase;
font-size: calc(10px + 6vmin);
`;

function App() {
  const questions = [
    { "question": "Is the number of dimensions of a line.", "answer": "1", "answers": ["3", "1", "0", "4"] },
    { "question": "Is the number of polynucleotide strands in a DNA double helix.", "answer": "2", "answers": ["2", "4", "0", "5"] },
    { "question": "Is the number of sets needed to be won to win the whole match in volleyball.", "answer": "3", "answers": ["2", "4", "3", "5"] },
    { "question": "Is the highest score possible in Olympics gymnastics competitions.", "answer": "10", "answers": ["9", "14", "20", "10"] }
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
