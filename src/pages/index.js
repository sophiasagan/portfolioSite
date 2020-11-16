import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({location}) => (
  <Layout location={location}>
    
    <SEO title="Home" />
    <h1 className="txt-center">Sophia Jung</h1>
      <p className="txt-center txt-heavy push-medium--bottom">
        Full-stack developer in Metro Detroit, Michigan.
      </p>
    {/* <Listing /> */}
    
  </Layout>
)

export default IndexPage
