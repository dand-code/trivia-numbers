import React from 'react';

 
function AnswerRecords(props) {

    const answersList = props.answersList;
//     const renderList = () => {
//         let html = "";
//         for (let i = 0; i < bestAnimatedFeature2016Nominees.length; i++)
//         {
//             html += 
//           }
//    }
   
    return (
        <div id="answered">
            <ul id="answeredList">
                {answersList.map(answer =>
                    <li>
                        {answer.question}
                        {answer.status}
                        {answer.solution}
                    </li>
                )} 
           </ul>
        </div>
     
    );
}     

export default AnswerRecords;
