import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogCategories extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={this.props.pageContext.categories} />
        <h2 className="mb-3">{this.props.pageContext.categories}</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.frontmatter.url
          return (
            <div
              className="card border-secondary mb-3"
              key={node.frontmatter.url}
            >
              <div className="card-body">
                <h3 className="card-title">
                  <Link style={{ boxShadow: `none` }} to={node.frontmatter.url}>
                    {title}
                  </Link>
                </h3>
                <p className="card-subtitle mb-2 text-muted">
                  <Link
                    className="text-muted mr-2"
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
      </Layout>
    )
  }
}

export default BlogCategories

export const pageQuery = graphql`
  query blogCategoriesListQuery($categories: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: $categories } } }
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
