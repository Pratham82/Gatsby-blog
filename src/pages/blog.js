import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

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
      <ul style={{ listStyle: "none" }}>
        {data.allMarkdownRemark.edges.map(v => (
          <li>
            <h2>
              {" "}
              <Link
                to={`/blog/${v.node.fields.slug}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {v.node.frontmatter.title}{" "}
              </Link>
            </h2>
            <p style={{ lineHeight: 0 }}>{v.node.frontmatter.date} </p>
            <br />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog
