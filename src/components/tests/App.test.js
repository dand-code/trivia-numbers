import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';

import App from '../App';

const theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#4CAF50',
    tertiary: '#70b25e',
  },
  spacing: [0, 4, 8, 12, 16, 20],
}

test('render welcome screen', () => {
  const component = mount(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );

  const title = component.find('h1');
  expect(title.text()).toBe('Trividado');

  const subtitle = component.find('h3');
  expect(subtitle.text()).toBe('Welcome to Trividado number quiz!');

  const button = component.find('button');
  expect(button.text()).toBe('Start');
});
