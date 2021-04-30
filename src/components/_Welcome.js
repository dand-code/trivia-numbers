import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const WelcomeWrapper = styled.div`
text-align: center;
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


function Welcome() {

    return (
        <WelcomeWrapper>
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

        </WelcomeWrapper >
    );
}

export default Welcome;
