import React from 'react';
import styled from 'styled-components';

 
const UserAnswerListItem = styled.li`
    list-style: none;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    padding: 10px;

    & p.error{
        color: red;
        & span{
            color: ${({ theme }) => { return theme.colors.secondary }};
            font-weight: 100;
            font-size: 15px;
        }
    }
    & p.ok{
        color: ${({ theme }) => { return theme.colors.tertiary }};
    }

`;

const Line = styled.div`
    border-top: 1px solid ${({ theme }) => { return theme.colors.secondary }};  
    padding: 10px;
`;

function AnswerRecords(props) {

    const answersList = props.answersList;

    return (
        <div>
            <ul>
                {answersList.map(answer =>
                    <UserAnswerListItem key={`number ${ answer.solution }`}>
                        <Line></Line>
                        <p>{answer.question}</p>
                        <p className={answer.status === 'Ok' ? 'ok' : "error"}>{answer.status} <span>{answer.status === 'Ok' ? `${answer.solution}`: `Rigth answer was ${answer.solution}`}</span></p>
                    </UserAnswerListItem>
                )}
           </ul>
        </div>
     
    );
}     

export default AnswerRecords;
