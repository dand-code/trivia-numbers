import React from 'react';
// import styled from 'styled-components';


function Questions(props) {
    return (
        <div>
            <p>{props.question}</p>
            <ul>
                <li>Resposta 1</li>
                <li>Resposta 2</li>
                <li>Resposta 3</li>
                <li>Resposta 4</li>
            </ul>
        </div>
    );
}

export default Questions;
