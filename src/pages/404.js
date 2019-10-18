import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="페이지를 찾을 수 없습니다." />
        <div className="row">
          <div className="block text-center">
            <h1 className="block-title">
              <span role="img" aria-label="not found">
                🤔
              </span>
            </h1>
            <p className="lead">요청하신 페이지를 찾을 수 없습니다.</p>
            <Link className="btn btn-outline-primary" to="/" role="button">
              메인으로 가기
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
