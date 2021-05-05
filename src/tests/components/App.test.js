import React from 'react';
import { create } from 'react-test-renderer';

function App(props) {
  return `<GlobalStyle />
  <MainWrapper>
  <Title>
    Trividado
  </Title>
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/trivial" render={props => <Questions {...props} questions={questions} />} />
  </Switch>
</MainWrapper>`;
}

describe("APP component", () => {
  test("Matches the snapshot", () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});