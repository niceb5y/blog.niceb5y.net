import React from 'react'
import { Link } from 'gatsby'

export default ({ title }) => (
  <nav className="navbar navbar-light my-4 px-0">
    <Link className="navbar-brand mr-auto text-primary" to="/">
      {title}
    </Link>
  </nav>
)
