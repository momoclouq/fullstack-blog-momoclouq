import React from "react";
import styled from 'styled-components';
import BaseLink from "../BaseLink/BaseLink";

type ProjectStatus = 'On going' | 'Finished' | 'On hold' | 'Abandoned';

const ProjectCardWrapper = styled.article`
    margin-bottom: 1em;
    padding: 1em;
    border: 0.1em solid black;
    border-radius: 0.5em;
    display: flex;
    flex-direction: column;

    .projectTitle {
        margin: 0.5em 0;
        font-size: 1.2em;
    }

    .projectTitle:hover {
        text-decoration: underline;
    }
`;

const ProjectStatus = ({ status }) => {
    let color = '#000000';

    switch(status) {
        case 'On going': color = '#2e5485'; break;
        case 'Finished': color = '#07f23e'; break;
        case 'On hold': color = '#715ff5'; break;
        default: color = '#de1024'; break;
    }

    return (
        <div style={{
            paddingTop: '0.2em',
            color: color,
            width: 'fit-content',
            textDecoration: 'underline'
        }}>
            {status}
        </div>
    )
}

const ProjectCard = ({ title, description, status, link }: { title: string; description: string; status: ProjectStatus; link: string; }) => {
    return (
        <ProjectCardWrapper>
            <div className="projectTitle"><a target="_blank" rel="noopener noreferrer" href={link}>{title}</a></div>
            <div className="projectDescription">{description}</div>
            <ProjectStatus status={status} />
        </ProjectCardWrapper>
    );
}   

export default ProjectCard;