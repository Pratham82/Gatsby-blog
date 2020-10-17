import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const Heading = () => (
  <Layout>
    <Head title="Home" />
    <h1 style={{ textAlign: "center" }}>Prathamesh's Blog</h1>{" "}
    <h2>Hi 👋 I'm Prathamesh Mali, a Full Stack Developer</h2>
    <h3>Living in Mumbai, IN</h3>
    {/*Gatsby's link (this will work faster than normal link)*/}
    Need a Developer <Link to="/contact">Contact Me</Link>
  </Layout>
)

export default Heading
