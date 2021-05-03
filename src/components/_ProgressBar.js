import React from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
width: 10%;
height: 30px;
background-color: #04AA6D;
text-align: center; /* To center it horizontally (if you want) */
line-height: 30px; /* To center it vertically */
color: white;
`;


// const barStyle = {
//     width: '300px',
//     backgroundColor: 'black',
//     border: '5px solid black',
//     borderRadius: '5px',
//     // &.progress-bar{
//     // borderRadius: '5px',
//     // border: '1px solid green',
//     }

function ProgressBar(props) {
    const questions = props.questions;
    const indexQuestions = props.indexQuestions;

    
    function move(props) {
        const questions = props.questions;
        var element = document.getElementById("myBar");   
        var width = indexQuestions + 1;
        var identity = setInterval(scene, 10);
        function scene() {
          if (width = questions.length) {
            clearInterval(identity);
          } else {
            width++; 
            element.style.width = width + '%'; 
          }
        } 
    }

    move();


    return (         
        <BarWrapper id="myBar">10%</BarWrapper>       
    );
}

export default ProgressBar;
