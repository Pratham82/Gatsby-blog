import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <p>
        Created with{" "}
        <span role="img" aria-label="heart">
          {" "}
          ❤️{" "}
        </span>{" "}
        by &nbsp;
        <b>
          <a
            href="https://www.github.com/pratham82"
            target="_"
            style={{ textDecoration: "none", color: "black" }}
          >
            {author.site.siteMetadata.author}
          </a>
        </b>
        &copy; 2020
      </p>{" "}
    </footer>
  )
}
export default Footer
