import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
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
      }
    }
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
      }
    }
  }
`
