import React from 'react';
import { create } from 'react-test-renderer';

function Welcome(props) {
    return `<WelcomeWrapper>
  <SubTitle>
      Welcome to Trividado number quiz!
  </SubTitle>
  <Link to="/trivial">
      <Button
          target="_blank"
          rel="noopener noreferrer"
      >
          Start
    </Button>
  </Link>
</WelcomeWrapper >`;
}

describe("Welcome component", () => {
    test("Matches the snapshot", () => {
        const welcome = create(<Welcome />);
        expect(welcome.toJSON()).toMatchSnapshot();
    });
});