/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import get from 'lodash/get';
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: block;
  
`


const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
    
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      {/* <Spring
          from={{ height: location.pathname === '/' ? 200 : 300 }}
          to={{ height: location.pathname === '/' ? 300 : 200 }}
        >
          {styles => (
            <div style={{ overflow: 'hidden', ...styles }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
                
        }}
      >
        <MainLayout>
          <div>{children}</div>
        </MainLayout>
        {/* <Archive /> */}
        {/* <footer
          style={{
            marginTop: `2rem`,
            textAlign: 'center'
          }}
        >
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://github.com/sophiasagan">Sophia J.</a> using React & Gatsby.
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
