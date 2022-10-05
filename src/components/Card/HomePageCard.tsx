import React from "react";
import styled from 'styled-components';
import BaseLink from "../BaseLink/BaseLink";

const CardWrapper = styled.article`
    display: flex;
    padding: 0.5em 0;
    margin-top: 1em;
    border-bottom: 0.1px solid black;
    border-right: 0.1px solid black;
    border-top: 0.1px solid transparent;
    height: 300px;
    flex-direction: row;
    transition: box-shadow 0.3s;

    @media (max-width: 768px) {
        font-size: 0.8em;
        height: 250px;
    }

    &:hover {
        box-shadow: 4px 4px 4px 0 #bfbeba;
        border-top: 0.1px solid black;
    }
`;

const CardTitle = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1em;
`;

const CardDescription = styled.div`
    font-weight: 300;
    flex-grow: 1;
`;

const CardTime = styled.div`
    bottom: 1em;
    font-size: 0.8em; 
`;

const CardImgWrapper = styled.div`
    flex-basis: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        flex-basis: 40%;
    }
`;

const CardRightWrapper = styled.div`
    flex-basis: 70%;
    padding: 1em 1em 1em 1.5em;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-basis: 60%;
    }
`

const HomePageCard = ({ title, url, description, time, imgUrl, imgAlt }) => {
    return (
        <CardWrapper>
            <CardImgWrapper><BaseLink to={url}><img src={imgUrl} alt={imgAlt} /></BaseLink></CardImgWrapper>
            <CardRightWrapper>
                <CardTitle><BaseLink to={url}>{title}</BaseLink></CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardTime>- {time}</CardTime>
            </CardRightWrapper>
        </CardWrapper>
    );
}

export default HomePageCard;