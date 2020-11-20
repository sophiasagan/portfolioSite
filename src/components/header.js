import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import profileImg from "../images/sjwhitecodefull.png"

const HeaderWrapper = styled.div`
  // background: linear-gradient(45deg,  #69b7eb, #b3dbd3, #f4d6db);
  // border-bottom: 3px solid rgba(0, 0, 0, 0.4);
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;

  img {
    margin-top: 1rem;
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
    color: #fbe8d3;
  }
  li {
    float: left;
    list-style-type: none;
  }
  li a {
    color: #fbe8d3;
    text-align: center;
    padding: 0px 16px;
    text-decoration: none;
    background: none;
  }
  li a:hover {
    background: #f85f73;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-transition: background .5s ease-out;
  }
  #hamnav {
    width: 100%;
    // background: #233;
    /* Optional */
    position: sticky;
    top: 0;
  }

  /* Hide Hamburger */
  #hamnav label,
  #hamburger {
    display: none;
  }

  /* Horizontal Menu Items */
  #hamitems {
    display: flex;
  }
  #hamitems a {
    width: 20%; /* 100% / 5 tabs = 20% */
    padding: 10px;
    color: white;
    text-decoration: none;
    text-align: center;
  }
  // #hamitems a:hover {
  //   background: #401408;
  // }

  /* [ON SMALL SCREENS] */
  @media screen and (max-width: 768px) {
    /* Show Hamburger Icon */
    #hamnav label {
      display: inline-block;
      color: white;
      // background: #a02620;
      font-style: normal;
      font-size: 1.2em;
      padding: 10px;
    }

    /* Break down menu items into vertical */
    #hamitems a {
      box-sizing: border-box;
      display: block;
      width: 100%;
      border-top: 1px solid #333;
    }

    /* Toggle Show/Hide Menu */
    #hamitems {
      display: none;
    }
    #hamnav input:checked ~ #hamitems {
      display: block;
    }
  }
`

const Header = ({ metadata = {}, noBlog = false }) => {
  

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
          <nav id="hamnav">
            <label for="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger" />

            <div id="hamitems">
              <ul>
                {
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                }
                
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
                {!noBlog && (
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </HeaderList>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
