import { prototype } from '@wojtekmaj/enzyme-adapter-react-17';
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
    background-color: ${({ theme }) => { return theme.colors.tertiary }};
    margin: auto 12px 0;
    text-align: center;
`;

const Button = styled.button`
background-color: ${props => props.primary ? ({ theme }) => { return theme.colors.tertiary } : ({ theme }) => { return theme.colors.secondary }};
width: 130px;
border: none;
color: black;
padding: 15px 32px;
text-align: center;
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


function Question(props) {

    return (
        <>
            <QuestionText>{props.question["question"]}</QuestionText>
            <AnswersWrapper>
                <AnswerItem><CircleSelect></CircleSelect>{props.question["answers"][0]}</AnswerItem>
                <AnswerItem><CircleSelect></CircleSelect>{props.question["answers"][1]}</AnswerItem>
                <AnswerItem><CircleSelect></CircleSelect>{props.question["answers"][2]}</AnswerItem>
                <AnswerItem><CircleSelect></CircleSelect>{props.question["answers"][3]}</AnswerItem>
            </AnswersWrapper>
            <div>
                <Button>Confirm</Button>
                <Button onClick={props.skipQuestion} primary>Skip</Button>
            </div>
        </>
    );
}

export default Question;