import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SchemaBreadcrumbList from '../components/schema/breadcrumblist'
import SchemaBlogPosting from '../components/schema/blogposting'

import { MarkdownRemark, PagePostContext } from '../entities'

const PagePost = ({
  data,
  pageContext
}: {
  data: { markdownRemark: MarkdownRemark }
  pageContext: PagePostContext
}) => {
  const post = data.markdownRemark
  const { frontmatter } = post
  const postCategories = frontmatter.categories
  const postTitle = frontmatter.title
  const postDescription = frontmatter.description
  const postUrl = frontmatter.url
  const postDate = frontmatter.date
  const postModDate = post.parent.modifiedTime
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={postTitle} description={postDescription} />
      <SchemaBreadcrumbList
        list={[
          {
            name: postCategories,
            item: `/categories/${postCategories}/`
          },
          {
            name: postTitle,
            item: `${postUrl}`
          }
        ]}
      />
      <SchemaBlogPosting
        postTitle={postTitle}
        postDescription={postDescription}
        postUrl={postUrl}
        postDate={postDate}
        postModDate={postModDate}
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

export default PagePost

export const postQuery = graphql`
  query postQuery($url: String!) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
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
