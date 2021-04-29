import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';

const theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#ccc',
    tertiary: '#70b25e',
  },
  spacing: [0, 4, 8, 12, 16, 20],
}

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById('root')
);

