import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { Site } from '../entities'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            copyright
          }
        }
      }
    `}
    render={(data: { site: Site }) => (
      <footer className="pt-3 pb-5 text-center">
        <hr />
        <span>{data.site.siteMetadata.copyright}</span>
      </footer>
    )}
  />
)

export default Footer
