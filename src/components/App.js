import styled, { createGlobalStyle } from 'styled-components';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchQuestions, restoreQuestions, updateStoredQuestions, clearQuestions } from '../services/fetchQuestions';
import Welcome from './_Welcome';
import Questions from './_Questions';


const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
  body{
    background-color: ${ ({ theme }) => { return theme.colors.dark } };;
  }
`;

const MainWrapper = styled.main`
  min-height: 100vh;
  max-width: 1200px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1.5vmin);
  color: ${ ({ theme }) => { return theme.colors.white } };
  line-height: ${ ({ theme }) => theme.spacing[2] }rem;
  text-align: center;
  margin: 0 auto; 
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: calc(10px + 6vmin);
`;

function App() {
  const [questions, setQuestions] = useState(restoreQuestions());
  const [answersList, setAnswerList] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  if (!questions)
  {
    fetchQuestions()
      .then(questions => {
        setQuestions(questions);
      });
  }
  
  const resetGame = () => { 
    setGameOver(false);
    clearQuestions();
    window.location = "/"; 
  }

  const updateQuestions = (questions, index, answersList) => { 
    updateStoredQuestions(questions, index, answersList);
  };
  return (
    <>
       <GlobalStyle />
      <MainWrapper>
        <Title>
          Trividado
        </Title>
        <Switch>
            <Route exact path="/" render={props => <Welcome {...props} />} />
            <Route path="/trivial" render={props => <Questions {...props} questions={questions} answersList={answersList} setAnswerList={setAnswerList} resetGame={resetGame}
              setGameOver={setGameOver} gameOver={gameOver} updateQuestions={updateQuestions} />
            } />
        </Switch> 
      </MainWrapper>
    </>
  );
}

export default App;
