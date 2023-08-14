import * as React from "react"
import { Link } from "gatsby"
import "./css/header.css"

import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="Logo" />
        <ul className="navbar-menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">SOBRE</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
