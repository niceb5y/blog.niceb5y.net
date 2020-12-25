import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/postlist'
import SchemaBreadcrumbList from '../components/schema/breadcrumblist'

import { AllMarkdownRemark, PageCategoriesContext } from '../entities'

const PageCategories = ({
  data,
  pageContext,
}: {
  data: {
    allMarkdownRemark: AllMarkdownRemark
  }
  pageContext: PageCategoriesContext
}) => {
  const posts = data.allMarkdownRemark.edges

  const { categories } = pageContext
  const { pageCurrent, pageTotal } = pageContext

  return (
    <Layout>
      <SEO title={categories} />
      <SchemaBreadcrumbList
        list={[
          {
            name: categories,
            item: `/categories/${categories}/`,
          },
          {
            name: `Page ${pageCurrent}`,
            item: `${
              pageCurrent > 1
                ? `/categories/${categories}/page${pageCurrent}`
                : `/categories/${categories}/`
            }`,
          },
        ]}
      />
      <PostList
        list={posts}
        pageCurrent={pageCurrent}
        pageTotal={pageTotal}
        pagePrefix={`/categories/${categories}`}
      />
    </Layout>
  )
}

export default PageCategories

export const categoriesQuery = graphql`
  query categoriesQuery($categories: String, $skip: Int!, $limit: Int!) {
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
