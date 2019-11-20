import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { resolve } from 'url'

interface BreadcrumbListProps {
  list: Array<{
    name: string
    item: string
  }>
}

const BreadcrumbList = ({ list }: BreadcrumbListProps) => (
  <StaticQuery
    query={graphql`
      query SchemaBreadcrumbListQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                name: data.site.siteMetadata.title,
                item: '/'
              },
              ...list
            ].map((elem, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: elem.name,
              item: resolve(data.site.siteMetadata.siteUrl, elem.item)
            }))
          })
        }}
      />
    )}
  />
)

export default BreadcrumbList
