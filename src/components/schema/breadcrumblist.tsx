import React from 'react'

interface BreadcrumbListProps {
  list: Array<{
    name: string
    item: string
  }>
}

const BreadcrumbList = ({ list }: BreadcrumbListProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: list.map((elem, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: elem.name,
          item: elem.item
        }))
      })
    }}
  />
)

export default BreadcrumbList
