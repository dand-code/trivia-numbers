import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProgressBar from './_ProgressBar'
import Question from './_Question';
import AnswerRecords from './_AnswerRecords';

const Button = styled.button`
   background-color: ${props => props.primary ? ({ theme }) => { return theme.colors.primary } : ({ theme }) => { return theme.colors.secondary }};
   width: 140px;
   border: none;
   color: ${({ theme }) => { return theme.colors.black }};
   padding: 15px 19px;
   text-decoration: none;
   font-weight: 800;
   display: inline-block;
   font-size: 16px;
   text-transform: uppercase;
   margin-top: 40px;
   margin-bottom: 40px;
   margin-right: 20px;

   &:last-of-type{
      margin-right: 0;
}
`;
 
function Questions(props) {
    const maxTimer = 5;
    const questions = props.questions;
    const [indexQuestions, setIndexQuestions] = useState(0);
    const [question, setQuestion] = useState(questions[0]);
    const [userAnswer, setUserAnswer] = useState();
    const [answersList, setAnswerList] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [timer, setTimer] = useState(1); 



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
        ]);
        setAnswerList(() => newAnswersList);
        nextQuestion();
        buttonDisabled();
    }

    const nextQuestion = () => { 
        if (indexQuestions < questions.length - 1)
        {
            let nextIndexQuestion = indexQuestions + 1;
            setIndexQuestions(nextIndexQuestion);
            setQuestion(questions[nextIndexQuestion]);
        } else
        { 
            props.setGameOver(true);
        }
        
    }

    const buttonDisabled = () => {
        if (indexQuestions === questions.length - 1)
        setDisabled(true);
    }

    // const runTimer = () => { 
    //     setTimer(timer => {
    //         console.log(timer);
    //         if (timer === maxTimer)
    //         {
    //             setIndexQuestions(indexQuestions => { 
    //                 return indexQuestions + 1;
    //             });
    //             setQuestion(questions[indexQuestions + 1]);
    //             console.log("Hola");
    //             return 1;
    //         }
    //         else
    //         {
    //             console.log("Adios");
    //             return timer + 1;
    //         }
    //     });
    // };

    // useEffect(() => {
    //     const interval = setInterval(runTimer, 1000);
    //      clearInterval(() => interval);
    // }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            
            setTimer(() => {
                const newTimer = timer + 1;
                console.log('old' + newTimer);
                console.log('new+' + (timer % maxTimer));
                
                if (newTimer % maxTimer === maxTimer - 1)
                {
                    skipQuestion();
                }
                return newTimer % maxTimer;
            });
        }, 1000);
        // clearInterval(interval);
    },[]);




    return (
        <>    
            <div id="progressBar">
                <h2>Question {indexQuestions + 1} of {questions.length}</h2>
                <ProgressBar color={"#ff7979"} width={"150px"} timer={timer - 1} max={maxTimer} />
            </div>
            <div id="Question">
                {!props.gameOver && <Question question={question} saveUserAnswer={saveUserAnswer} userAnswer={userAnswer} />}
            </div>
            <div>
                {!props.gameOver && <Button onClick={confirmQuestion} disabled={disabled}>Confirm</Button>}
                {!props.gameOver && <Button onClick={skipQuestion} disabled={disabled} primary>Skip</Button>}
            </div>
               
            <AnswerRecords answersList={answersList} />
            { props.gameOver && <Button onClick={props.resetGame} primary>Play Again</Button> }
            
        </>
    );
}

export default Questions;
