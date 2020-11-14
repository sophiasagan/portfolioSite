import { Link } from "gatsby"
import get from "lodash/get"
import React from "react"
import styled from "styled-components"

import profileImg from "../images/sjwhitecode.png"

const HeaderWrapper = styled.div`
  background: rgba(59, 72, 79, 6)
  ;
  img {
    margin-bottom: 0;
    transition: all .2s ease-in-out;    
  }
  img:hover {
    transform: scale(1.1); 
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.3rem;
`

const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, "author", true)
  const github = get(metadata, "github", true)
  const linkedin = get(metadata, "linkedin", true)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div>
          <div>
            <Link to="/">
              <img src={profileImg} alt={metadata.name} style={{
              width: '200px',
            }} />
            </Link>
          </div>
          <div>
            <h1>
              <Link to="/">{metadata.name}</Link>
            </h1>
            <p>{metadata.description}</p>
            <ul>
              {twitter && (
                <li>
                  <a href={`https://twitter.com/${twitter}`}>Twitter</a>
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
          </div>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
