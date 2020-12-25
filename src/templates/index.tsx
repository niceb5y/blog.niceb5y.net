import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/postlist'
import SchemaBreadcrumbList from '../components/schema/breadcrumblist'

import { AllMarkdownRemark, Site, PageIndexContext } from '../entities'

const PageIndex = ({
  data,
  pageContext,
}: {
  data: {
    site: Site
    allMarkdownRemark: AllMarkdownRemark
  }
  pageContext: PageIndexContext
}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { pageCurrent, pageTotal } = pageContext

  return (
    <Layout>
      <SEO title={siteTitle} />
      <SchemaBreadcrumbList
        list={[
          {
            name: 'All Posts',
            item: `/`,
          },
          {
            name: `Page ${pageCurrent}`,
            item: `${pageCurrent > 1 ? `/page${pageCurrent}` : `/`}`,
          },
        ]}
      />
      <PostList
        list={posts}
        pageCurrent={pageCurrent}
        pageTotal={pageTotal}
        pagePrefix=""
      />
    </Layout>
  )
}

export default PageIndex

export const indexQuery = graphql`
  query indexQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
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
