import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        categoriesGroup: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
        site {
          siteMetadata {
            copyright
          }
        }
      }
    `}
    render={data => (
      <footer className="pt-3 pb-5 text-center">
        <hr />
        <span>{data.site.siteMetadata.copyright}</span>
      </footer>
    )}
  />
)

export default Footer
