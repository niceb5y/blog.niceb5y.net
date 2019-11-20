import React from 'react'
import { Link } from 'gatsby'

import { Edge } from '../entities'

const PostList = ({
  list,
  pageCurrent,
  pageTotal,
  pagePrefix
}: {
  list: Array<Edge>
  pageCurrent: number
  pageTotal: number
  pagePrefix: string
}) => (
  <>
    {list.map(({ node }) => {
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
          to={
            pageCurrent > 2
              ? `${pagePrefix}/page${pageCurrent - 1}`
              : `${pagePrefix}/`
          }
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
              ? `${pagePrefix}/page${pageCurrent + 1}`
              : `${pagePrefix}/page${pageTotal}`
          }
        >
          다음
          <span className="icon icon-chevron-right" />
        </Link>
      </div>
    )}
  </>
)

export default PostList
