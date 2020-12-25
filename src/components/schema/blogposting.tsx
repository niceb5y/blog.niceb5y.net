import { graphql, useStaticQuery } from 'gatsby'
import { resolve } from 'url'

import { Site, Asset } from '../../entities'

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
  postUrl,
}: BlogPostingProps) => {
  const data: {
    site: Site
    defaultImage: Asset
    icon: Asset
  } = useStaticQuery(graphql`
    query schemaBlogPostingQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
      defaultImage: allFile(filter: { relativePath: { eq: "image.png" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
      icon: allFile(filter: { relativePath: { eq: "icon.png" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  const metaImage = resolve(
    data.site.siteMetadata.siteUrl,
    data.defaultImage.edges[0].node.publicURL
  )
  const metaIcon = resolve(
    data.site.siteMetadata.siteUrl,
    data.icon.edges[0].node.publicURL
  )

  return (
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
            name: data.site.siteMetadata.author,
          },
          publisher: {
            '@type': 'Organization',
            name: data.site.siteMetadata.title,
            logo: {
              '@type': 'ImageObject',
              url: metaIcon,
            },
          },
          image: [metaImage],
          datePublished: postDate,
          dateModified: postModDate,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${data.site.siteMetadata.siteUrl}${postUrl}`,
          },
        }),
      }}
    />
  )
}

export default BlogPosting
