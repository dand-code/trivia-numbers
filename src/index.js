import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#4CAF50',
    tertiary: '#70b25e',
  },
  spacing: [0, 4, 8, 12, 16, 20],
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

