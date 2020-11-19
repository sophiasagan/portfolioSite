import React, { Component, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Comment from '../components/comment'


// Static Query
// Used anywhere, doesn't accept variable, can't use context

// Page Query
// Must be used on pages

const commentBox = React.createRef()
useEffect(() => {
  const commentScript = document.createElement('script')
  const theme =
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
      ? 'github-dark'
      : 'github-light'
  commentScript.async = true
  commentScript.src = 'https://utteranc.es/client.js'
  commentScript.setAttribute('repo', 'sophiasagan/comments') // CHANGE THIS if you're just going to clone this repo and use the code. Do not test your code using my repo.
  commentScript.setAttribute('issue-term', 'pathname')
  commentScript.setAttribute('id', 'utterances')
  commentScript.setAttribute('theme', theme)
  commentScript.setAttribute('crossorigin', 'anonymous')
  if (commentBox && commentBox.current) {
    commentBox.current.appendChild(commentScript)
  } else {
    console.log(`Error adding utterances comments on: ${commentBox}`)
  }
}, [])

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    // const commentBox = React.createRef()

  

    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <div className="container">
        <div id="comments">
          <h2>Comments</h2>
          <Comment commentBox={commentBox} />
        </div>
        </div>
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
