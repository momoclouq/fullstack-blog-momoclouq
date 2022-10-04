import React from "react";
import styled from "styled-components";
import BaseLink from "../BaseLink/BaseLink";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderLinkItem = styled(BaseLink)`
    padding: 0.5em 1em;
    border: 1px solid transparent;
    margin: 0.5em 5px;
    transition: border 0.3s;

    &:hover {
        border-bottom: 1px solid black;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLinkItem to="/">/home</HeaderLinkItem>
            <HeaderLinkItem to="/projects">/projects</HeaderLinkItem>
            <HeaderLinkItem to="/about-me">/about-me</HeaderLinkItem>
        </HeaderWrapper>
    )
};

export default Header;