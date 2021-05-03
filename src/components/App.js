import styled, { createGlobalStyle } from 'styled-components';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchQuestions } from '../services/fetchQuestions';
import Welcome from './_Welcome';
import Questions from './_Questions';
import AnswerRecords from './_AnswerRecords';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
  body{
    background-color: ${ ({ theme }) => { return theme.colors.background } };;
  }
`;

const MainWrapper = styled.main`
  background-color: ${ ({ theme }) => { return theme.colors.background } };;
  min-height: 100vh;
  max-width: 1200px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1.5vmin);
  color: ${ ({ theme }) => { return theme.colors.primary } };
  line-height: ${ ({ theme }) => theme.spacing[2] }rem;
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: calc(10px + 6vmin);
`;

function App() {
  const [questions, setQuestions] = useState([]);
  const [answersList, setAnswerList] = useState([]);
  const [gameOver, setGameOver] = useState(false);


  fetchQuestions()
    .then(data => {
      setQuestions(data);
    });

  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Title>
          Trividado
        </Title>
        {gameOver ?
          (<Switch>
          <Route exact path="/" component={Welcome} />
            <Route path="/trivial" render={props => <Questions {...props} questions={questions} answerList={answersList} setAnswerList={setAnswerList} />} />
          </Switch>)
          :
          (<><p>Result Page</p><button>PLAY AGAIN</button></>)
        }
      </MainWrapper>
    
    </>
  );
}

export default App;
