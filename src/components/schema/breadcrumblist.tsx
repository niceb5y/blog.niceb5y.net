import { graphql, useStaticQuery } from 'gatsby'
import { resolve } from 'url'

import { Site } from '../../entities'

interface BreadcrumbListProps {
  list: Array<{
    name: string
    item: string
  }>
}

const BreadcrumbList = ({ list }: BreadcrumbListProps) => {
  const data: { site: Site } = useStaticQuery(graphql`
    query schemaBreadcrumbListQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              name: data.site.siteMetadata.title,
              item: '/',
            },
            ...list,
          ].map((elem, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: elem.name,
            item: resolve(data.site.siteMetadata.siteUrl, elem.item),
          })),
        }),
      }}
    />
  )
}

export default BreadcrumbList
