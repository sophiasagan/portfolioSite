import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact"

const Contact = () => (
    <Layout>
      <SEO title="Contact" />
      <div className="container default-container">
        
        <div data-aos="flip-up" data-aos-delay="500" data-aos-duration="750">
        <ContactForm />
      </div>
      </div>
    </Layout>
  )
  
  export default Contact