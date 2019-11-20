import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BreadcrumbList from '../components/schema/breadcrumblist'

const PageIndex = ({ data, pageContext }) => {
  const { siteMetadata } = data.site
  const siteTitle = siteMetadata.title
  const siteUrl = siteMetadata.siteUrl

  const posts = data.allMarkdownRemark.edges

  const pageCurrent = pageContext.currentPage
  const pageTotal = pageContext.numPages

  return (
    <Layout>
      <SEO title={siteTitle} />
      <BreadcrumbList
        list={[
          {
            name: siteTitle,
            item: `${siteUrl}/`
          },
          {
            name: 'All Posts',
            item: `${siteUrl}/`
          },
          {
            name: `Page ${pageCurrent}`,
            item: `${siteUrl}${pageCurrent > 1 ? `/page${pageCurrent}` : `/`}`
          }
        ]}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.url
        return (
          <div className="card mb-3" key={node.frontmatter.url}>
            <div className="card-body px-0 pt-0">
              <h3 className="card-title">
                <Link style={{ boxShadow: `none` }} to={node.frontmatter.url}>
                  {title}
                </Link>
              </h3>
              <p className="card-subtitle mb-2 text-muted">
                <Link
                  className={`cat-${node.frontmatter.categories} mr-2`}
                  to={`/categories/${node.frontmatter.categories}/`}
                >
                  {node.frontmatter.categories}
                </Link>
                {node.frontmatter.date}
              </p>
              <p
                className="card-text"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description
                }}
              />
            </div>
          </div>
        )
      })}
      {pageTotal > 1 && (
        <div className="d-flex justify-content-between">
          <Link
            className={`btn btn-outline-primary ${
              pageCurrent === 1 ? 'disabled' : ''
            }`}
            to={pageCurrent > 2 ? `/page${pageCurrent - 1}` : `/`}
          >
            <span className="icon icon-chevron-left" />
            이전
          </Link>
          <span className="py-1">
            {pageCurrent} / {pageTotal}
          </span>
          <Link
            className={`btn btn-outline-primary ${
              pageCurrent === pageTotal ? 'disabled' : ''
            }`}
            to={
              pageCurrent < pageTotal
                ? `/page${pageCurrent + 1}`
                : `/page${pageTotal}`
            }
          >
            다음
            <span className="icon icon-chevron-right" />
          </Link>
        </div>
      )}
    </Layout>
  )
}

export default PageIndex

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            url
            description
            categories
          }
        }
      }
    }
  }
`
