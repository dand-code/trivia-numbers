import React from 'react';
import styled from 'styled-components';

const QuestionText = styled.p`
  font-size: calc(10px + 2vmin);
  padding: 10px 15px;
  line-height: 1.5;
`;

const AnswersWrapper = styled.ul`
  list-style: none;
  width: 20rem; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const AnswerItem = styled.li`
  flex-basis: 50%;
  align-items: center;
  line-height: 2;
  cursor: pointer;
`;

const CircleSelect = styled.div`
  border-radius: 50%;
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: auto 12px 0;
  text-align: center;

  &.selected {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

function Question(props) {
  return (
    <>
      <QuestionText>{props.question["question"]}</QuestionText>
      <AnswersWrapper>
        {props.question["options"].map((option, index) => (
          <AnswerItem key={index} onClick={() => props.saveUserAnswer(option)}>
            <CircleSelect className={props.userAnswer === option ? 'selected' : ''}></CircleSelect>{option}
          </AnswerItem>
        ))}
      </AnswersWrapper>
    </>
  );
}

export default Question;
