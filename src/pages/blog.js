import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(data.allMarkdownRemark.edges)
  console.log(data.allMarkdownRemark.edges.map(v => v.node.frontmatter.date))

  return (
    <Layout>
      <h1>Tech Blog</h1>
      <p>All the blog posts will appear here</p>
      <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(v => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${v.node.fields.slug}`}>
              <h2> {v.node.frontmatter.title} </h2>
              <p>{v.node.frontmatter.date} </p>
            </Link>

            <br />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog
