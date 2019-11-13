import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPost = ({ data, pageContext, location }) => {
  const { siteMetadata } = data.site
  const siteTitle = siteMetadata.title
  const siteUrl = siteMetadata.siteUrl
  const siteAuthor = siteMetadata.author

  const post = data.markdownRemark
  const { frontmatter } = post
  const postCategories = frontmatter.categories
  const postTitle = frontmatter.title
  const postDescription = frontmatter.description
  const postUrl = frontmatter.url
  const postDate = frontmatter.date
  const postModDate = post.parent.modifiedTime
  const { previous, next } = pageContext

  const BreadCrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: siteTitle,
        item: `${siteUrl}/`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: postCategories,
        item: `${siteUrl}/categories/${postCategories}/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: postTitle,
        item: `${siteUrl}${postUrl}`
      }
    ]
  }

  const ArticleSchema = {
    '@context': 'http://schema.org/',
    '@type': 'BlogPosting',
    name: postTitle,
    headline: postDescription,
    description: postDescription,
    author: {
      '@type': 'Person',
      name: siteAuthor
    },
    publisher: {
      '@type': 'Organization',
      name: siteTitle,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/icon.png`
      }
    },
    image: [`${siteUrl}/images/blog.png`],
    datePublished: postDate,
    dateModified: postModDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}${postUrl}`
    }
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={postTitle} description={postDescription} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadCrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ArticleSchema) }}
      />
      <article>
        <header>
          <h1>{postTitle}</h1>
          <p className="text-muted">
            <Link
              className={`cat-${postCategories} mr-2`}
              to={`/categories/${postCategories}/`}
            >
              {postCategories}
            </Link>
            {postDate}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <div className="mt-5">
        {next && (
          <div className="py-2">
            <span className="icon icon-chevron-up" /> 다음 글 -{' '}
            <Link to={next.frontmatter.url} rel="next">
              {next.frontmatter.title}
            </Link>
          </div>
        )}
        {previous && (
          <div className="py-2">
            <span className="icon icon-chevron-down" /> 이전 글 -{' '}
            <Link to={previous.frontmatter.url} rel="prev">
              {previous.frontmatter.title}
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByURL($url: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        author
      }
    }
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        categories
        url
      }
      parent {
        ... on File {
          modifiedTime(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`
