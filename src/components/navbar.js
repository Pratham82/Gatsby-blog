import React from "react"
import { Link } from "gatsby"

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#364f6b",
  color: "white",
}

const ulStyle = { listStyle: "none", textDecoration: "none", display: "flex" }
const liStyle = { textDecoration: "none", color: "white", padding: "0 10px" }

const Navbar = () => (
  <div style={nav}>
    <h2>
      <Link style={liStyle} to="/">
        Pratham82
      </Link>
    </h2>
    <ul style={ulStyle}>
      <li>
        {" "}
        <Link to="/" style={liStyle}>
          Home
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/blog" style={liStyle}>
          Blog
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/contact" style={liStyle}>
          Conatct
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/about" style={liStyle}>
          About
        </Link>{" "}
      </li>
    </ul>
  </div>
)

export default Navbar
