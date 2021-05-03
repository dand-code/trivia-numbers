import React, { useState } from 'react';
import styled from 'styled-components';
import Question from './_Question';
import AnswerRecords from './_AnswerRecords';

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
    const [userAnswer, setUserAnswer] = useState();
    const [answersList, setAnswerList] = useState([]);
    const [disabled, setDisabled] = useState(false);
   
    const saveUserAnswer = (e) => { 
        const selectedItem = e.currentTarget;
        setUserAnswer(selectedItem.innerText);
    }

    const confirmQuestion = () => {
        let status = 'Correct';
        if (userAnswer !== question["solution"])
        {
             status = 'Error';
        } 

        const newAnswersList = answersList.concat([
            {
                "question": question["question"],
                "status": status,
                "solution": question["solution"]
            }
        ])
        setAnswerList(newAnswersList);
        nextQuestion();
        buttonDisabled();
    }

    const skipQuestion = () => {
        const newAnswersList = answersList.concat([
            {
                "question": question["question"],
                "status": "Skipped",
                "solution": question["solution"]
            }
        ])

        setAnswerList(newAnswersList);
        nextQuestion();
        buttonDisabled();
    }

    const nextQuestion = () => { 
        if (indexQuestions < questions.length - 1) {
            let nextIndexQuestion = indexQuestions + 1;
            setIndexQuestions(nextIndexQuestion);
            setQuestion(questions[nextIndexQuestion]);
        }
        
    }

    const buttonDisabled = () => {
        if (indexQuestions === questions.length - 1)
        setDisabled(true);
    }

  
    return (
        <>
            <div id="progressBar">Progress Bar</div>
            <div id="Question">
                <Question question={question} saveUserAnswer={saveUserAnswer} userAnswer={userAnswer} />
            </div>
            <div>
                <Button onClick={confirmQuestion} disabled={disabled}>Confirm</Button>
                <Button onClick={skipQuestion} disabled={disabled} tertiary>Skip</Button>
            </div>

            <AnswerRecords answersList={answersList} />
        </>
    );
}

export default Questions;
