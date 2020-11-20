import React from 'react'
// import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";
import styled from 'styled-components';
import external from '../images/icons8-external-link.svg'
import github from '../images/icons8-github.svg'

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 2px;
    border-radius: 14px;
    background-color: #928a97;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
    width: 100%;
    max-width: 500px;
    .name {
        font-size: 1.5rem;
        text-decoration: underline;
        margin-bottom: 20px;
        font-weight: bold;
        text-align: center;
    }
    .description {
        text-align: left;
    }
    .list {
        margin: 1em;
        ul {
            list-style-type: disc;
            list-style-position: inside;
            li {
                line-height: 1.5;
                font-size: 0.9em;
            }
        }
    }
    .image {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 300px;
        @media (max-width: 400px) {
            height: 200px;
        }
    }
    .no-image {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        
    }
    img {
        width: 100%;
        height: 100%;
    }
    .links {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    .link {
        width: 35px;
        height: 35px;
        margin: 10px 0;
    }
    .tools {
        align-items: center;
        width: 100%;
        border-top: 1px solid black;
        padding-top: 10px;
    }
    .tool {
        font-weight: bold;
        line-height: 1.5;
        
    }
`;

export default function Card({ project }) {
    const backgroundImage = project.image ? (
        <div
            className="image"
            style={{ backgroundImage: `url(${project.image})` }}
            title="Preview image of project"
        ></div>
    ) : (
        <div className="no-image">In Development</div>
    );

    return (
        <CardStyled>
            <h3 className="name">{project.name}</h3>
            <p className="description">{project.description}</p>
            <div className="list">
                <ul>
                    {project.bullets.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            </div>
            <Box variant="project">
                {backgroundImage}
                <div className="links">
                    <div className="link">
                        <a href={project.github} target="_blank">
                            <img
                                src={github}
                                alt="github link"
                            />
                        </a>
                    </div>
                    <div className="link">
                        <a href={project.link} target="_blank">
                            <img
                                src={external}
                                alt="deployed link"
                            />
                        </a>
                    </div>
                </div>
            </Box>
            <Flex
                className="tools"
                flexDirection={{ _: "column", md: "row" }}
                justifyContent={{ _: "center", md: "space-around" }}
            >
                {project.tools.map((tool) => (
                    <p className="tool" key={tool}>
                        {tool}
                    </p>
                ))}
            </Flex>
        </CardStyled>
    );
}

