import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Question from './_Question';
import AnswerRecords from './_AnswerRecords';

const Button = styled.button`
  background-color: ${props => props.primary ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.secondary};
  width: 140px;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  padding: 15px 19px;
  text-decoration: none;
  font-weight: 800;
  display: inline-block;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }
`;

function Questions(props) {
  const [indexQuestions, setIndexQuestions] = useState(props.questions.index);
  const [question, setQuestion] = useState(props.questions.questions[indexQuestions]);
  const [userAnswer, setUserAnswer] = useState(null);
  const [answersList, setAnswerList] = useState(props.questions.answersList);

  useEffect(() => {
    setQuestion(props.questions.questions[indexQuestions]);
    setUserAnswer(null);
  }, [indexQuestions, props.questions.questions]);

  const saveUserAnswer = (answer) => {
    setUserAnswer(answer);
  }

  const confirmQuestion = () => {
    if (userAnswer === null) {
      alert("Please select an answer or choose to skip the question.");
      return;
    }

    const normalizedUserAnswer = String(userAnswer).trim().toLowerCase();
    const normalizedSolution = String(question["solution"]).trim().toLowerCase();

    let status = 'Correct';
    if (normalizedUserAnswer !== normalizedSolution) {
      status = 'Error';
    }

    const newAnswersList = [...answersList, {
      "question": question["question"],
      "selectedAnswer": userAnswer,
      "status": status,
      "solution": question["solution"]
    }];
    props.updateQuestions(props.questions.questions, newAnswersList.length - 1, newAnswersList);
    setAnswerList(newAnswersList);
    nextQuestion();
  }

  const skipQuestion = () => {
    const newAnswersList = [...answersList, {
      "question": question["question"],
      "status": "Skipped",
      "solution": question["solution"]
    }];
    props.updateQuestions(props.questions.questions, newAnswersList.length - 1, newAnswersList);
    setAnswerList(newAnswersList);
    nextQuestion();
  }

  const nextQuestion = () => {
    if (indexQuestions < props.questions.questions.length - 1) {
      setIndexQuestions(indexQuestions + 1);
    } else {
      props.setGameOver(true);
    }
  }

  return (
    <>
      <h2>Question {indexQuestions + 1} of {props.questions.questions.length}</h2>
      <div>
        {!props.gameOver && question && <Question question={question} saveUserAnswer={saveUserAnswer} userAnswer={userAnswer} />}
      </div>
      <div>
        {!props.gameOver && <Button onClick={skipQuestion}>Skip</Button>}
        {!props.gameOver && <Button onClick={confirmQuestion} primary disabled={userAnswer === null}>Confirm</Button>}
      </div>
      <AnswerRecords answersList={answersList} />
      {props.gameOver && <Button onClick={props.resetGame} primary>Play Again</Button>}
    </>
  );
}

export default Questions;
