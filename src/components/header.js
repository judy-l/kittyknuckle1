import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, location }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      // background: `cornflowerblue`,
			background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#f77fbe`,						// Persian pink.
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
	location: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
	location: ``,
}

export default Header
