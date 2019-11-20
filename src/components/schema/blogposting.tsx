import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

interface BlogPostingProps {
  postTitle: string
  postDescription: string
  postDate: string
  postModDate: string
  postUrl: string
}

const BlogPosting = ({
  postTitle,
  postDescription,
  postDate,
  postModDate,
  postUrl
}: BlogPostingProps) => (
  <StaticQuery
    query={graphql`
      query SchemaBlogPostingQuery {
        site {
          siteMetadata {
            title
            description
            author
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
            '@context': 'http://schema.org/',
            '@type': 'BlogPosting',
            name: postTitle,
            headline: postDescription,
            description: postDescription,
            author: {
              '@type': 'Person',
              name: data.site.siteMetadata.author
            },
            publisher: {
              '@type': 'Organization',
              name: data.site.siteMetadata.title,
              logo: {
                '@type': 'ImageObject',
                url: `${data.site.siteMetadata.siteUrl}/images/icon.png`
              }
            },
            image: [`${data.site.siteMetadata.siteUrl}/images/blog.png`],
            datePublished: postDate,
            dateModified: postModDate,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${data.site.siteMetadata.siteUrl}${postUrl}`
            }
          })
        }}
      />
    )}
  />
)

export default BlogPosting
