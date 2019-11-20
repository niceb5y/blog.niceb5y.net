import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        categoriesGroup: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar-expand-sm navbar navbar-light my-4 px-0">
        <Link className="navbar-brand mr-auto text-primary" to="/">
          {data.site.siteMetadata.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon icon-menu"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav pl-3">
            {data.categoriesGroup.group.map((elem: { fieldValue: string }) => {
              const category = elem.fieldValue
              return (
                <li className="nav-item" key={category}>
                  <Link
                    className={`nav-link nav-${category}`}
                    activeClassName="active"
                    to={`/categories/${category}/`}
                  >
                    {category}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )}
  />
)

export default Header
