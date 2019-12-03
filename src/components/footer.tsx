import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Site } from '../entities'

const Footer = () => {
  const data: { site: Site } = useStaticQuery(graphql`
    query footerQuery {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  return (
    <footer className="pt-3 pb-5 text-center">
      <hr />
      <p>
        <span>{data.site.siteMetadata.copyright}</span>
        <span className="mx-3" />
        <span>
          <a href="https://www.buymeacoffee.com/niceb5y">Buy me a Coffee</a>
        </span>
      </p>

      <noscript key="noscript" id="gatsby-noscript">
        <p>이 블로그는 JavaScript를 사용할 때 더 좋은 경험을 제공합니다.</p>
      </noscript>
    </footer>
  )
}

export default Footer
