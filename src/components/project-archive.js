import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FormattedIcon from "../components/icons/formattedIcon"

// import styled from 'styled-components'

function ProjectArchive() {
  const data = useStaticQuery(graphql`
    query PROJECTS_QUERY {
      site {
        siteMetadata {
          projects {
            title
            description
            tech
            date
            github
            link
          }
        }
      }
    }
  `)
  const projects = data.site.siteMetadata
  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th className="hide-mobile">Built with</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {projects.length > 0 &&
          projects.map(({ projects }, i) => {
            // const { date, github, link, title, tech, inProgress } = data.site.siteMetadata.projects
            return (
              <tr key={i}>
                <td className="txt-neutral txt-x-small">{`${new Date(
                  projects.date
                ).getFullYear()}`}</td>

                <td className="title txt-heavy txt-x-small">
                  {projects.title}{" "}
                </td>

                <td className="tech txt-neutral txt-x-small hide-mobile">
                  {projects.tech.length > 0 &&
                    projects.tech.map((item, i) => (
                      <span key={i}>
                        {item}
                        {""}
                        {i !== projects.tech.length - 1 && (
                          <span className="bullet">&middot;</span>
                        )}
                      </span>
                    ))}
                </td>

                <td className="links">
                  <span>
                    {projects.link && (
                      <a
                        href={projects.link}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                      >
                        <FormattedIcon name="External" />
                      </a>
                    )}
                    {projects.github && (
                      <a
                        href={projects.github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Link"
                      >
                        <FormattedIcon name="GitHub" />
                      </a>
                    )}
                  </span>
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default ProjectArchive
