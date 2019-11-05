import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

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
                    __html: node.frontmatter.description || node.excerpt
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
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
