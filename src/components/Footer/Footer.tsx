import React from "react";
import styled from 'styled-components';
import BaseLink from "../BaseLink/BaseLink";

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.5em;
`;

const ContactMeLink = styled(BaseLink)`
    padding: 0.2em 0.5em;
    border-radius: 2em;
    background: #dedcde;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <div style={{ textAlign: 'center', marginBottom: '0.5em' }}>Minh's personal blog</div>
            <div style={{ textAlign: 'center', fontSize: '0.8em' }}>Im looking for a job, a project. <ContactMeLink to="/contact-me">Contact me 🐒</ContactMeLink></div>
        </FooterWrapper>
    )
}

export default Footer;