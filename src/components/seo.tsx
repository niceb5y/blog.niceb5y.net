import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { resolve } from 'url'

import { Site, Asset } from '../entities'

interface SEOProps {
  description?: string
  lang?: string
  title: string
  image?: string
  meta?: ConcatArray<
    | { name: string; content: any; property?: undefined }
    | { property: string; content: any; name?: undefined }
  >
}

function SEO({ description, lang = 'ko', meta = [], title, image }: SEOProps) {
  const {
    site,
    defaultImage,
  }: { site: Site; defaultImage: Asset } = useStaticQuery(
    graphql`
      query seoQuery {
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
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = resolve(
    site.siteMetadata.siteUrl,
    image || defaultImage.edges[0].node.publicURL
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        title !== site.siteMetadata.title
          ? `%s | ${site.siteMetadata.title}`
          : '%s'
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
