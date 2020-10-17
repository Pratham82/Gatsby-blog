import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const Blog = () => {
  const contentFullData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Tech Blog</h1>
      <ul className={blogStyles.posts}>
        {contentFullData.allContentfulBlogPost.edges.map(v => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${v.node.slug}`}>
              <h2> {v.node.title} </h2>
              <p>{v.node.publishedDate} </p>
            </Link>
            <br />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog
