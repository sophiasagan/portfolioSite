import { Link } from "gatsby"
import get from "lodash/get"
import React from "react"
import styled from "styled-components"

import profileImg from "../images/sjwhitecodefull.png"

const HeaderWrapper = styled.div`
  background-color: rgba(59, 72, 79, 11);
  border-bottom: 3px solid rgba(0, 0, 0, 0.4);
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  img {
    margin-top: 0;
    margin-bottom: 0;
    transition: all 0.2s ease-in-out;
  }
  img:hover {
    transform: scale(1.1);
  }
`

const HeaderContainer = styled.div`
width: 90%;
  margin: 0 auto;
  display: block
  padding: 0.3rem;
`
const HeaderList = styled.ul`
  float: right;
  line-height: 150px;
  font-size: 1.4em;
  top: 0;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: none;
    color: #000;
  }
  li {
    float: left;
    list-style-type: none;
  }
  li a {
    color: #dcdcdc;
    text-align: center;
    padding: 0px 16px;
    text-decoration: none;
    background: none;
    

  }
  li a:hover {
    background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-transition: background 1s ease-out;
    
  }
`

const Header = ({ metadata = {}, noBlog = false }) => {
  // const twitter = get(metadata, "author", true)
  const github = get(metadata, "github", false)
  const linkedin = get(metadata, "linkedin", false)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to="/">
          <img
            src={profileImg}
            alt={metadata.name}
            style={{
              width: "100px",
            }}
          />
        </Link>

        <HeaderList>
          <ul>
            {/* {twitter && (
              <li>
                <a href={`https://twitter.com/${twitter}`}>Twitter</a>
              </li>
            )} */}
            {(
              <li>
                <Link to="/about">About</Link>
              </li>
            )}
            {github && (
              <li>
                <a href={github}>GitHub</a>
              </li>
            )}
            {linkedin && (
              <li>
                <a href={linkedin}>LinkedIn</a>
              </li>
            )}
            {!noBlog && (
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            )}
            {!noBlog && (
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            )}
          </ul>
        </HeaderList>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
