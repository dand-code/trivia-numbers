import React, { useState } from 'react';
import Question from './_Question';


function Questions(props) {
    const questions = props.questions;
    const [indexQuestions, setIndexQuestions] = useState(0);
    const [question, setQuestion] = useState(questions[0]);

    const confirmQuestion = () => {

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
        </>
    );
}

export default Questions;
