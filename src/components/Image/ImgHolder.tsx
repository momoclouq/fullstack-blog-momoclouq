import React from "react";
import styled from "styled-components";
import missing_image from "../../static/image/missing_image.webp";

type ImgHolderProps = {
    link: string;
    alt: string;
    defaultMaxHeight?: string;
}

const ImgHolderWrapper = styled.div`
    width: fit-content;
    max-width: 100%;
    height: ${props => props.defaultMaxHeight || "400px"};
`;

const Img = styled.img`
    max-width: 100%;
    height: 100%;
`;

const ImgHolder = ({ link, alt, defaultMaxHeight = "300px" }: ImgHolderProps) => {
    return (
        <ImgHolderWrapper defaultMaxHeight={defaultMaxHeight}>
            <Img 
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = missing_image;
                }}
                src={link}
                alt={alt}
            />
        </ImgHolderWrapper>
    )
}

export default ImgHolder;