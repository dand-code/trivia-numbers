
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
    align-item: center;
    justify-content: space-between;
    margin: 0 auto;
    flex-wrap: wrap;
`;

const AnswerItem = styled.li`
    flex-basis: 50%;
    align-items: center;
    line-height: 2;
 
`;

const CircleSelect = styled.div`
    border-radius: 50%;
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    background-color: ${({ theme }) => { return theme.colors.primary }};
    margin: auto 12px 0;
    text-align: center;
    &.selected{
        background-color:${({ theme }) => { return theme.colors.secondary }};
`;


function Question(props) {
    return (
        <>
            <QuestionText>{props.question["question"]}</QuestionText>
            <AnswersWrapper>
                {props.question["options"].map(option => 
                  <AnswerItem onClick={props.saveUserAnswer}>
                    <CircleSelect className={parseInt(props.userAnswer) === option ? 'selected' : ""}></CircleSelect>{option}
                  </AnswerItem>  
                )}
            </AnswersWrapper>
        </>
    );
}

export default Question;