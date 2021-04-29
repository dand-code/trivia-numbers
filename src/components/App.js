import styled, { createGlobalStyle } from 'styled-components';
// import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './_Welcome';
import Questions from './_Questions';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;

const HeaderWrapper = styled.header`
  
`;

const Title = styled.h1`
text-transform: uppercase;
color: black;
text-align: center;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column; 
  align-items: center;
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <HeaderWrapper>
        <Title>
          Trividado
        </Title>
      </HeaderWrapper>
      <MainWrapper>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/trivial" component={Questions} />
        </Switch>
      </MainWrapper>
    </>
  );
}

export default App;
