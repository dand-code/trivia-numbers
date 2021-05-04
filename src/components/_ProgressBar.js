import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: ${props => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: #eee;
  }  

  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: ${props => props.color};
  }
`;

const ProgressBar = ({ value, max, color, width }) => {
  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
    </Container>
  );
};

export default ProgressBar;
