import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;

const HeaderWrapper = styled.header`
  background-color: #282c34;
  height: 100vh;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => { return theme.colors.primary }};
  line-height: ${({ theme }) => theme.spacing[2]}rem;
`;

const Title = styled.h1`
text-transform: uppercase;
`;

const SubTitle = styled.h3`
`;



const Button = styled.button`
background-color: ${({ theme }) => { return theme.colors.secondary }};
border: none;
color: black;
padding: 15px 32px;
text-align: center;
text-decoration: none;
font-weight: 800;
display: inline-block;
font-size: 16px;
text-transform: uppercase;
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderWrapper>
        <Title>
          Trividado
          </Title>
        <SubTitle>
          Welcome to Trividado number quiz!
          </SubTitle>
        <Button
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start
          </Button>
      </HeaderWrapper>
    </>
  );
}

export default App;
