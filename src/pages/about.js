import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Footer from "../components/footer"

const AboutStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    // font-size: 3rem;
    padding: 20px 0;
    font-weight: bold;
  }
  p {
    // font-size: 1.2rem;
    padding: 20px 0;
    line-height: 1.5;
  }
  a {
    font-weight: bold;
    text-decoration: underline;
  }
  a:hover {
    background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-transition: background 1s ease-out;
  }
  .lambda {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3 {
      font-size: 1.4rem;
      margin-top: 20px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    ul {
      margin-left: 20px;
      list-style-type: disc;
      list-style-position: inside;
      li {
        line-height: 1.5;
      }
    }
  }
`

const About = ({ location }) => (
  <Layout location={location}>
    <AboutStyled>
      <h1 className="txt-center">About</h1>

      <p>
        I'm Sophia Jung, a Full Stack Web Developer and soon to be graduate of
        Lambda School. I also hold a Master of Science in Psychology. I've spent
        several years in various social services, human resources, and sales
        positions. In 2018 I sought out a major career change, looking for
        something that would allow me to utilize my love for creating,
        problem-solving, and that aligned with my ever curious nature.
      </p>
      <p>
        When not at my computer, you can either find me reading an interesting
        book, slapping the bass, or watching a horror movie.
      </p>
    </AboutStyled>
    <Footer />
  </Layout>
)

export default About
