import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Heading = () => (
  <Layout>
    <h1 style={{ textAlign: "center" }}>Prathamesh's Blog</h1>{" "}
    <h2>Hi I'm Prathamehs Mali, a Full Stack Developer</h2>
    <h3>Living in Mumbai, IN</h3>
    <p>
      {" "}
      {/*Normal link which will refesh the page when we go to new page*/}
      Need a Developer <a href="/contact">Contact Me</a>{" "}
    </p>
    {/*Gatsby's link (this will work faster than normal link)*/}
    Need a Developer <Link to="/contact">Contact Me</Link>
  </Layout>
)

export default Heading
