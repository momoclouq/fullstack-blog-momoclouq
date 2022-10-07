import React from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import styled from 'styled-components';
import ErrorText from "../components/Text/ErrorText";
import BaseLink from "../components/BaseLink/BaseLink";

const ErrorPageWrapper = styled(MainWrapper)`
    justify-content: center;
`;

const BackToHomeBtn = styled.button`
    all: unset;
    border-radius: 0.2em;
    padding: 1em;
    border: 0.1px solid black;
    background: white;
    transition: box-shadow 0.3s;
    
    &:hover {
        box-shadow: 4px 4px 4px 0 #bfbeba;
        border: 0.1px solid transparent;
    }
`;

const ErrorPage = () => {
    return (
        <ErrorPageWrapper>
            <ErrorText>404 PAGE NOT FOUND</ErrorText>
            <div style={{ margin: '1em' }}>The page you look for does not exist</div>
            <BackToHomeBtn>
                <BaseLink to="/">Back to homepage</BaseLink>
            </BackToHomeBtn>
        </ErrorPageWrapper>
    )
};

export default ErrorPage;