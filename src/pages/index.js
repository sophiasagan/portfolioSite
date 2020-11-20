import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Landing = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 300px;
  .name {
    position: relative;
    animation: fadeUp 2s ease-in-out;
  }

  span {
    
    color: #000;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 55px;
    animation: fadeUp 2s ease-in-out;
    perspective: 0px;
    letter-spacing: 10px
    margin-top: -60px
    padding-left: 10px
    
  }

  #sub {
    font-size: 35px;
    color: #fce2c6;
  }

  .underline {
    height: 5px;
    width: 100%;
    display: block;
    background-color: #f85f73; //#d9534f;
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
    .button{
      margin: 3em;
      width:150px;
      height:50px;
      background: #f85f73;
      border-style: none;
      color:#fff;
      font-size: 16px;
      letter-spacing: 3px;
      font-family: 'Lato';
      font-weight: 600;
      outline: none;
      cursor: pointer;
      position: relative;
      padding: 0px;
      overflow: hidden;
      transition: all .5s;
      box-shadow: 0px 1px 2px rgba(0,0,0,.2);
  }
  .button span{
      position: absolute;
      display: block;
  }
  .button span:nth-child(1){
      height: 3px;
      width:200px;
      top:0px;
      left:-200px;
      background: linear-gradient(to right, rgba(0,0,0,0), #f6e58d);
      border-top-right-radius: 1px;
      border-bottom-right-radius: 1px;
      animation: span1 2s linear infinite;
      animation-delay: 1s;
  }
  
  @keyframes span1{
      0%{
          left:-200px
      }
      100%{
          left:200px;
      }
  }
  .button span:nth-child(2){
      height: 70px;
      width: 3px;
      top:-70px;
      right:0px;
      background: linear-gradient(to bottom, rgba(0,0,0,0), #f6e58d);
      border-bottom-left-radius: 1px;
      border-bottom-right-radius: 1px;
      animation: span2 2s linear infinite;
      animation-delay: 2s;
  }
  @keyframes span2{
      0%{
          top:-70px;
      }
      100%{
          top:70px;
      }
  }
  .button span:nth-child(3){
      height:3px;
      width:200px;
      right:-200px;
      bottom: 0px;
      background: linear-gradient(to left, rgba(0,0,0,0), #f6e58d);
      border-top-left-radius: 1px;
      border-bottom-left-radius: 1px;
      animation: span3 2s linear infinite;
      animation-delay: 3s;
  }
  @keyframes span3{
      0%{
          right:-200px;
      }
      100%{
          right: 200px;
      }
  }
  
  .button span:nth-child(4){
      height:70px;
      width:3px;
      bottom:-70px;
      left:0px;
      background: linear-gradient(to top, rgba(0,0,0,0), #f6e58d);
      border-top-right-radius: 1px;
      border-top-left-radius: 1px;
      animation: span4 2s linear infinite;
      animation-delay: 4s;
  }
  @keyframes span4{
      0%{
          bottom: -70px;
      }
      100%{
          bottom:70px;
      }
  }
  
  .button:hover{
      transition: all .5s;
      transform: rotate(-3deg) scale(1.1);
      box-shadow: 0px 3px 5px rgba(0,0,0,.4);
  }
  .button:hover span{
      animation-play-state: paused;
  }
    
}
`

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Landing>
      <div class="name">
        <span>SOPHIA JUNG</span>
        <div class="underline"></div>
        <span id="sub">Full Stack Developer</span>
       
        <div class="wrapper">
        <Link to="/blog">
          <button href="#" class="button">
          Learn More
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          
          </button>
          </Link>
        </div>
        
      </div>
      
    </Landing>
    
  </Layout>
)

export default IndexPage
