import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

// Static Query
// Used anywhere, doesn't accept variable, can't use context

// Page Query
// Must be used on pages

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <section class="comments">
        <script
          src="https://utteranc.es/client.js"
          repo="sophiasagan/portfolioSite"
          issue-term="pathname"
          label="✨💬✨"
          theme="github-light"
          crossorigin="anonymous"
          async
        ></script>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
