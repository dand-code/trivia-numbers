import React from 'react';
import styled from 'styled-components';

const QuestionText = styled.p`
    font-size: calc(10px + 3vmin);
    padding: 10px 15px;
    line-height: 1.5;
`;

const AnswersWrapper = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: center;
    width: 20rem;
    margin: 0 auto;
`;

const AnswerItem = styled.li`
    flex-basis: 50%;
    align-items: center;
`;

const CircleSelect = styled.div`
    border-radius: 50%;
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    background-color: ${({ theme }) => { return theme.colors.tertiary }};
    margin: auto 12px 0;
    text-align: center;
`;


function Question(props) {

    return (
        <div>
            <QuestionText>{props.question["question"]}</QuestionText>
            <AnswersWrapper>
                <AnswerItem><CircleSelect></CircleSelect>{props.question["answers"][0]}</AnswerItem>
                <AnswerItem><CircleSelect></CircleSelect>{props.question["answers"][1]}</AnswerItem>
                <AnswerItem><CircleSelect></CircleSelect>{props.question["answers"][2]}</AnswerItem>
                <AnswerItem><CircleSelect></CircleSelect>{props.question["answers"][3]}</AnswerItem>
            </AnswersWrapper>
            <div>
                <button>Confirm</button>
                <button onClick={props.skipQuestion}>Skip</button>
            </div>

        </div>
    );
}

export default Question;