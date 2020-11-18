import React from "react"
import styled from "styled-components"
import { Box } from "reflexbox"
import Layout from "../components/layout"
import Footer from '../components/footer'

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

      <Box as="h2" variant="title" fontSize={{ _: "1.6rem", md: "2.2rem" }}>
        Overview
      </Box>
      <p>
        I'm Sophia Jung, a Full Stack Web Developer and recent graduate of
        Lambda School. I also hold a Master of Science in Psychology. I've spent
        several years in various social services, human resources, sales, and IT
        positions. In 2018 I sought out a major career change, looking for
        something that would allow me to utilize my love for learning,
        problem-solving, and that aligned with my growth mindset.
      </p>
      <p>
        IPhone direct trade cold-pressed, banjo you probably haven't heard of
        them sustainable etsy single-origin coffee vexillologist synth marfa.
        Glossier lumbersexual venmo cray, synth slow-carb raw denim. Portland
        try-hard blue bottle YOLO pug butcher freegan echo park. Before they
        sold out pork belly single-origin coffee green juice. Microdosing
        taiyaki tbh schlitz banjo. Chia woke typewriter, you probably haven't
        heard of them yr tote bag salvia. Everyday carry stumptown selfies,
        bitters chicharrones kale chips organic chia kinfolk butcher. Try-hard
        vape etsy health goth. Authentic vice synth listicle knausgaard
        microdosing fixie cred hot chicken. Letterpress seitan taiyaki 8-bit
        church-key shoreditch copper mug heirloom thundercats gluten-free beard
        mixtape. Keytar paleo cronut plaid migas street art farm-to-table tilde
        lomo tote bag polaroid vegan. Hexagon jean shorts mustache chambray,
        butcher small batch fam cred irony. Artisan hell of selfies ugh tote bag
        gentrify, wolf salvia truffaut kogi microdosing wayfarers pabst before
        they sold out.
      </p>
      <Box as="h2" variant="title" fontSize={{ _: "1.6rem", md: "2.2rem" }}>
        Who am I?
      </Box>
      <p>
        IPhone direct trade cold-pressed, banjo you probably haven't heard of
        them sustainable etsy single-origin coffee vexillologist synth marfa.
        Glossier lumbersexual venmo cray, synth slow-carb raw denim. Portland
        try-hard blue bottle YOLO pug butcher freegan echo park. Before they
        sold out pork belly single-origin coffee green juice. Microdosing
        taiyaki tbh schlitz banjo. Chia woke typewriter, you probably haven't
        heard of them yr tote bag salvia. Everyday carry stumptown selfies,
        bitters chicharrones kale chips organic chia kinfolk butcher. Try-hard
        vape etsy health goth. Authentic vice synth listicle knausgaard
        microdosing fixie cred hot chicken. Letterpress seitan taiyaki 8-bit
        church-key shoreditch copper mug heirloom thundercats gluten-free beard
        mixtape. Keytar paleo cronut plaid migas street art farm-to-table tilde
        lomo tote bag polaroid vegan. Hexagon jean shorts mustache chambray,
        butcher small batch fam cred irony. Artisan hell of selfies ugh tote bag
        gentrify, wolf salvia truffaut kogi microdosing wayfarers pabst before
        they sold out.
        </p>
        <p>
        I have strong communication skills, am detail-oriented,
        and have a positive attitude making me easy to work with. When not at my
        computer, you can either find me reading an interesting book or watching
        a horror movie.
      </p>
      {/* <Box
                    as="h2"
                    variant="title"
                    fontSize={{ _: "1.6rem", md: "2.2rem" }}
                >
                    What now?
                </Box>
                <p>
                    Fast forward to now, I am fully endorsed by Lambda School
                    and currently seeking my first big role in a company as a
                    Full Stack Web Developer. In the meantime, I work full time
                    as a Team Lead for students in the Computer Science section
                    of the curriculum. I am responsible for mentoring 9 students
                    through the curriculum, delivering 1 on 1 feedback, and
                    hosting daily stand up meetings. Twice a week I host "Before
                    Hours" for any students seeking help.
                </p> */}
      <Box as="h2" variant="title" fontSize={{ _: "1.6rem", md: "2.2rem" }}>
        Why Lambda School?
      </Box>
      <p>
        What I learned at Lambda School not only covers the fundamentals of
        computer science and web development, it gave me the opportunity to
        apply my theoretical knowledge. Not only did Lambda School teach me how
        to write concise, reusable, and professional code, I also learned how to
        work in a fast-paced, agile environment and how to work
        cross-functionally with other Web Developers, UX/UI designers, and Data
        Scientists. I learned by building real products and graduated with 1200
        hours of coding experience, not including the countless hours I spent
        coding before and after hours. Check out my{" "}
        <a href="https://github.com/sophiasagan" target="_blank">
          GitHub
        </a>{" "}
        contributions. Below is a brief overview of what I learned while at{" "}
        <a
          href="https://lambdaschool.com/courses/full-stack-web-development"
          target="_blank"
        >
          Lambda School
        </a>
        .
      </p>
      <div className="lambda">
        <h3>Unit 1: Web Foundations</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>UI principles</li>
          <li>GitHub</li>
        </ul>
        <h3>Unit 2: Web Application Development</h3>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>React Router</li>
          <li>HTTP/AJAX</li>
          <li>Functional programming techniques</li>
        </ul>
        <h3>Unit 3: Advanced Web Development</h3>
        <ul>
          <li>Advanced React</li>
          <li>Advanced state management</li>
          <li>Testing</li>
        </ul>
        <h3>Unit 4: Back End Development</h3>
        <ul>
          <li>Node.js</li>
          <li>Web APIs</li>
          <li>Data persistence</li>
          <li>Authentication</li>
          <li>Testing</li>
        </ul>
        <h3>Unit 5: Computer Science</h3>
        <ul>
          <li>Python</li>
          <li>Object oriented programming</li>
          <li>Algorithms</li>
          <li>Data Structures</li>
          <li>Hash tables</li>
          <li>Graphs</li>
          <li>Computer Architecture</li>
        </ul>
        <h3>Unit 6: Labs</h3>
        <ul>
          <li>Apprenticeship</li>
          <li>Build a real world application</li>
          <li>Work on a cross-functional team</li>
          <li>DevOps</li>
        </ul>
      </div>
    </AboutStyled>
    <Footer />
  </Layout>
)

export default About
