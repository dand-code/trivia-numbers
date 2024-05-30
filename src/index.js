import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';

const theme = {
  colors: {
    primary: '#70b25e', //green
    secondary: '#ccc', // grey
    dark: '#282c34', // page background
    white: '#ffffff',
    black: '#333333'
  },
  spacing: [0, 4, 8, 12, 16, 20],
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </HashRouter>
);
