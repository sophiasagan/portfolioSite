import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Landing = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 325px;
  .name {
    position: relative;
    animation: fadeUp 2s ease-in-out;
  }

  span {
    color: #191e28;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 65px;
    animation: fadeUp 2s ease-in-out;
    perspective: 0px;
  }

  #sub {
    font-size: 35px;
  }

  .underline {
    height: 5px;
    width: 100%;
    display: block;
    background-color: #d9534f;
    margin: 11px 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeUp {
    0% {
      transform: rotateX(-40deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
`

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Landing >
      <div class="name">
        <span>Sophia Jung</span>
        <div class="underline"></div>
        <span id="sub">Full Stack Developer</span>
      </div>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p> */}
    </Landing>
    {/* <Listing /> */}
  </Layout>
)

export default IndexPage
