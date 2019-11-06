import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const pageCurrent = this.props.pageContext.currentPage
    const pageTotal = this.props.pageContext.numPages

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="niceb5y blog" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.frontmatter.url
          return (
            <div className="card border-secondary mb-3" key={node.frontmatter.url}>
              <div className="card-body">
                <h3 className="card-title"
                >
                  <Link style={{ boxShadow: `none` }} to={node.frontmatter.url}>
                    {title}
                  </Link>
                </h3>
                <p className="card-subtitle mb-2 text-muted">{node.frontmatter.date}</p>
                <p className="card-text"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description
                  }}
                />
              </div>
            </div>
          )
        })}
        {
          pageTotal > 1 && (
            <div className="d-flex justify-content-between">
              <Link
                className={`btn btn-outline-primary ${pageCurrent === 1 ? "disabled" : ""}`}
                to={pageCurrent > 2 ? `/page${pageCurrent - 1}` : `/`}
              >
                <span className="icon icon-chevron-left" />이전
              </Link>
              <span>{pageCurrent} / {pageTotal}</span>
              <Link
                className={`btn btn-outline-primary ${pageCurrent === pageTotal ? "disabled" : ""}`}
                to={pageCurrent < pageTotal ? `/page${pageCurrent + 1}` : `/page${pageTotal}`}
              >
                다음<span className="icon icon-chevron-right" />
              </Link>
            </div>
          )
        }
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date],order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            url
            description
          }
        }
      }
    }
  }
`
