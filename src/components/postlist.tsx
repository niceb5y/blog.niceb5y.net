import { Link } from 'gatsby'
import styles from './postlist.module.scss'
import { Edge } from '../entities'

const PostList = ({
  list,
  pageCurrent,
  pageTotal,
  pagePrefix,
}: {
  list: Array<Edge>
  pageCurrent: number
  pageTotal: number
  pagePrefix: string
}) => (
  <div>
    {list.map(({ node }) => (
      <div className={styles.card} key={node.frontmatter.url}>
        <h3>
          <Link to={node.frontmatter.url}>
            {node.frontmatter.title || node.frontmatter.url}
          </Link>
        </h3>
        <p>
          <Link
            className={`cat-${node.frontmatter.categories}`}
            to={`/categories/${node.frontmatter.categories}/`}
          >
            {node.frontmatter.categories}
          </Link>
          {node.frontmatter.date}
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description,
          }}
        />
      </div>
    ))}
    {pageTotal > 1 && (
      <div className={styles.pagination}>
        <Link
          to={
            pageCurrent > 2
              ? `${pagePrefix}/page${pageCurrent - 1}`
              : `${pagePrefix}/`
          }
        >
          이전
        </Link>
        <span>
          {pageCurrent} / {pageTotal}
        </span>
        <Link
          to={
            pageCurrent < pageTotal
              ? `${pagePrefix}/page${pageCurrent + 1}`
              : `${pagePrefix}/page${pageTotal}`
          }
        >
          다음
        </Link>
      </div>
    )}
  </div>
)

export default PostList
