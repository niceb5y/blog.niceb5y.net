const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/posts.tsx`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                url
                description
                categories
              }
            }
          }
        }
        categoriesGroup: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.frontmatter.url,
      component: blogPost,
      context: {
        url: post.node.frontmatter.url,
        previous,
        next,
      },
    })
  })

  const postsPerPage = 10
  const pageTotal = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: pageTotal }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page${i + 1}`,
      component: path.resolve('./src/templates/index.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        pageCurrent: i + 1,
        pageTotal,
      },
    })
  })

  const categories = result.data.categoriesGroup.group
  categories.forEach((categories) => {
    const pageTotal = Math.ceil(
      posts.filter(
        (post) => post.node.frontmatter.categories === categories.fieldValue
      ).length / postsPerPage
    )
    Array.from({ length: pageTotal }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/categories/${categories.fieldValue}/`
            : `/categories/${categories.fieldValue}/page${i + 1}`,
        component: path.resolve('./src/templates/categories.tsx'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          categories: categories.fieldValue,
          pageCurrent: i + 1,
          pageTotal,
        },
      })
    })
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}
