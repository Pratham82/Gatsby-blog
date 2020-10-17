import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => (
  <Layout>
    <Head title="Contact" />
    <h1>Contact</h1>
    <p>Connect wieth me on follwing links: </p>
    <a href="https://linkedin.com/prathameshmali" target="_">
      LinkedIN
    </a>
    <br />
    <a href="https://github.com/pratham82" target="_">
      Gihub
    </a>
    <br />
    <a href="https://twitter.com/pratham_82" target="_">
      Twitter
    </a>
    <br />
    <Link to="/about">About me</Link>
  </Layout>
)

export default Contact
