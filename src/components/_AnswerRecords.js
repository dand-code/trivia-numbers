import React from 'react';
import styled from 'styled-components';

 
const UserAnswerListItem = styled.li`
    list-style: none;
    line-height: 1.5;
    padding: 10px;

    & .answer {
        display:flex;
        justify-content:center;
        align-items: center;
        i {
          margin-right: 8px;
          font-size: 2em;
        }
        & span{
            display: inline-block;
            vertical-align: middle;
            color: ${({ theme }) => { return theme.colors.secondary }};
            font-weight: 100;
            font-size: 0.7em;
            margin-left: 3px;
            }
        &.error{
            p,i{
                color: red;
            }
        }
        &.ok {
            i,p{
                color: ${({ theme }) => { return theme.colors.primary }};
            }
        }
    }
`;

const Line = styled.div`
    border-top: 1px solid #f5f5f5;  
    padding: 10px;
`;

function AnswerRecords(props) {
   
    const answersList = props.answersList;

   
    return (
        <div>
            <ul>
                {answersList.slice().reverse().map((answer,index) =>
                    <UserAnswerListItem key={answer.solution + index}>
                        <Line></Line>
                        <p>{answer.question}</p>
                        <div className={answer.status === 'Correct' ? 'answer ok' : "answer error"}>
                            {answer.status === 'Correct' ? <i className="fa fa-check-circle" aria-hidden="true"></i> : <i className="fa fa-times-circle" aria-hidden="true"></i>} 
                            <p>
                            {answer.status=== 'Correct' ? '' : answer.status}
                            {answer.status === 'Correct' ? answer.solution : <span>- Rigth answer was { answer.solution}</span>}
                            </p>
                        </div>
                    </UserAnswerListItem>
                )}
           </ul>
        </div>
    );
}     

export default AnswerRecords;