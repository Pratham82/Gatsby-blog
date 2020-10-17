import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => (
  <Layout>
    <Head title="Contact" />
    <h1>Contact</h1>
    <p>Connect with me using follwing links: </p>
    <a
      href="https://linkedin.com/prathameshmali"
      target="_"
      className="cleanLink"
    >
      LinkedIN ↗
    </a>
    <br />
    <a href="https://github.com/pratham82" className="cleanLink" target="_">
      Gihub ↗
    </a>
    <br />
    <a href="https://twitter.com/pratham_82" className="cleanLink" target="_">
      Twitter ↗
    </a>
    <br />
    <Link to="/about" className="cleanLink">
      About me ↗
    </Link>
  </Layout>
)

export default Contact
