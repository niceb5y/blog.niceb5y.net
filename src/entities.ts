export interface AllMarkdownRemark {
  edges: Array<Edge>
}

export interface CategoriesGroup {
  group: Array<{ fieldValue: string }>
}

export interface Edge {
  node: {
    frontmatter: Frontmatter
  }
}

export interface Frontmatter {
  title: string
  description: string
  url: string
  categories: string
  date: string
  featuredImage: {
    publicURL: string
  }
}

export interface MarkdownRemark {
  html: string
  frontmatter: Frontmatter
  parent: {
    modifiedTime: string
  }
}

export interface PageCategoriesContext extends PageIndexContext {
  categories: string
}

export interface PageIndexContext {
  pageCurrent: number
  pageTotal: number
}

export interface PagePostContext {
  previous?: { frontmatter: Frontmatter }
  next?: { frontmatter: Frontmatter }
}

export interface Site {
  siteMetadata: {
    title: string
    author: string
    description: string
    siteUrl: string
    social: {
      twitter: string
    }
    copyright: string
  }
}

export interface Asset {
  edges: Array<{
    node: {
      publicURL: string
    }
  }>
}
