import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import Header from "./header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          margin: `0 auto`,
      //    maxWidth: 960,
          maxWidth: rhythm(36),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,

      //    padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}

      //    marginLeft: `auto`,
      //    marginRight: `auto`,
      //    maxWidth: rhythm(24),
      //    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      >
        <Header siteTitle={title} location={location} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
