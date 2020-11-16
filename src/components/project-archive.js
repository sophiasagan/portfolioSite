import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import FormattedIcon from "../components/icons/formattedIcon"
import external from "../images/icons8-external-link.svg"
import github from "../images/icons8-github.svg"
// Styles
import styled from "@emotion/styled";
import { Box } from "reflexbox"
// Components
import Card from "./Card"
// Utils
import projects from "../utils/projects"
// import styled from "styled-components"

// const Table = styled.projecttable`

// `

const ProjectsStyled = styled.section`
  .projects {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`

function ProjectArchive() {
  //   const data = useStaticQuery(graphql`
  //     query PROJECT_QUERY {
  //       site(siteMetadata: { projects: {} }) {
  //         siteMetadata {
  //           projects {
  //             date
  //             description
  //             github
  //             link
  //             tech
  //             title
  //           }
  //         }
  //       }
  //     }
  //   `)
  //   const projects = data.site.siteMetadata
  //   console.log(projects)

  return (
    <ProjectsStyled id="projects">
      <Box as="h2" variant="title" fontSize={{ _: "1.6rem", md: "2.2rem" }}>
        {/* Projects */}
      </Box>
      <div className="projects">
        {projects.map(project => (
          <Box key={project.name} variant="card" maxWidth="500px">
            <Card project={project} />
          </Box>
        ))}
      </div>

      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>Built with</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2020</td>

            <td>title</td>

            <td>Javascript | React | Gatsby</td>

            <td>
              <span>
                <a
                  href="{link.com}"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="External Link"
                  className="link"
                >
                  <img
                    src={external}
                    alt="external link"
                    style={{
                      width: "25px",
                    }}
                  />
                </a>

                <a
                  href="{github.com}"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="GitHub Link"
                >
                  <img
                    src={github}
                    alt="external link"
                    style={{
                      width: "25px",
                    }}
                  />
                </a>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </ProjectsStyled>
  )
}

export default ProjectArchive
