import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogCategories extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const { pageContext } = this.props
    const { categories } = pageContext
    const pageCurrent = pageContext.currentPage
    const pageTotal = pageContext.numPages

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={categories} />
        <h2 className={`cat-${categories} mb-3`}>{categories}</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.frontmatter.url
          return (
            <div className="card mb-3" key={node.frontmatter.url}>
              <div className="card-body px-0">
                <h3 className="card-title">
                  <Link style={{ boxShadow: `none` }} to={node.frontmatter.url}>
                    {title}
                  </Link>
                </h3>
                <p className="card-subtitle mb-2 text-muted">
                  <Link
                    className={`cat-${categories} mr-2`}
                    to={`/categories/${categories}/`}
                  >
                    {categories}
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
              to={
                pageCurrent > 2
                  ? `/categories/${categories}/page${pageCurrent - 1}`
                  : `/categories/${categories}/`
              }
            >
              <span className="icon icon-chevron-left" />
              이전
            </Link>
            <span>
              {pageCurrent} / {pageTotal}
            </span>
            <Link
              className={`btn btn-outline-primary ${
                pageCurrent === pageTotal ? 'disabled' : ''
              }`}
              to={
                pageCurrent < pageTotal
                  ? `/categories/${categories}/page${pageCurrent + 1}`
                  : `/categories/${categories}/page${pageTotal}`
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
}

export default BlogCategories

export const pageQuery = graphql`
  query blogCategoriesListQuery(
    $categories: String
    $skip: Int!
    $limit: Int!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $categories } } }
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
