import React, { useEffect } from 'react';
// import styled from 'styled-components';


function Questions(props) {
    useEffect(() => {
        props.updateQuestion();
    });

    return (
        <div>
            <p>{props.question}</p>
            <ul>
                <li>Answer 1</li>
                <li>Answer 2</li>
                <li>Answer 3</li>
                <li>Answer 4</li>
            </ul>
        </div>
    );
}

export default Questions;
