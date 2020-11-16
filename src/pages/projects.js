import React from "react"
// import Img from 'gatsby-image'
// import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Archive from "../components/archive"
import ProjectArchive from "../components/project-archive"
// import get from "lodash/get"

// import './work.scss'

const ProjectPage = ({ data }) => {
  // const projects = get(data, "site.siteMetadata.projects", false)
  return (
    <Layout>
      <SEO title="Recent work" />
      <h1 className="txt-center">Projects</h1>
     
      <section>
        <ProjectArchive />
      </section>
      <section >
        <a href="https://www.github.com/sophiasagan">
          View more projects on GitHub
        </a>
        &nbsp;→
      </section>
    </Layout>
  )
}
export default ProjectPage
