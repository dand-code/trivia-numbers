import React, { useState } from 'react';
import styled from 'styled-components';
import Question from './_Question';

const Button = styled.button`
   background-color: ${props => props.tertiary ? ({ theme }) => { return theme.colors.tertiary } : ({ theme }) => { return theme.colors.secondary }};
   width: 130px;
   border: none;
   color: black;
   padding: 15px 25px;
   text-decoration: none;
   font-weight: 800;
   display: inline-block;
   font-size: 16px;
   text-transform: uppercase;
   margin-right: 20px;

   &:last-of-type{
      margin-right: 0;
}
`;


function Questions(props) {
    const questions = props.questions;
    const [indexQuestions, setIndexQuestions] = useState(0);
    const [question, setQuestion] = useState(questions[0]);

    const confirmQuestion = () => {
        console.log('Confirm clicked');
    }

    const skipQuestion = () => {
        if (indexQuestions < questions.length - 1) {
            let nextIndexQuestion = indexQuestions + 1;
            setIndexQuestions(nextIndexQuestion);
            setQuestion(questions[nextIndexQuestion]);
        }
    }

    return (
        <>
            <div id="progressBar">Progress Bar</div>
            <div id="Question">
                <Question question={question} confirmQuestion={confirmQuestion} skipQuestion={skipQuestion} />
            </div>
            <div id="answered"></div>
            <div>
                <Button onClick={confirmQuestion}>Confirm</Button>
                <Button onClick={skipQuestion} tertiary>Skip</Button>
            </div>
        </>
    );
}

export default Questions;
