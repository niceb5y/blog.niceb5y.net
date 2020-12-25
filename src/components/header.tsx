import { useEffect, useRef, useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import ScrollBooster from 'scrollbooster'
import styles from './header.module.scss'
import { Site, CategoriesGroup } from '../entities'

const Header = () => {
  const data: {
    site: Site
    categoriesGroup: CategoriesGroup
  } = useStaticQuery(graphql`
    query headerQuery {
      categoriesGroup: allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const debounce = useRef<number>(null) as React.MutableRefObject<number>
  const viewport = useRef<HTMLDivElement>(null)
  const [scrollAvailable, setScrollAvailable] = useState(false)

  useEffect(() => {
    if (!scrollAvailable) return
    const sb = new ScrollBooster({
      viewport: viewport.current,
      scrollMode: 'transform',
      direction: 'horizontal',
    })
    return () => {
      sb.setPosition({ x: 0 })
      sb.destroy()
    }
  }, [scrollAvailable])

  useEffect(() => {
    const resizeHandler = () => {
      if (!viewport.current) return
      if (debounce.current) {
        window.clearTimeout(debounce.current)
      }
      const { scrollWidth, clientWidth } = viewport.current
      debounce.current = window.setTimeout(() => {
        setScrollAvailable(scrollWidth !== clientWidth)
      }, 250)
    }
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  useEffect(() => {
    if (!viewport.current) return
    setScrollAvailable(
      viewport.current.scrollWidth !== viewport.current.clientWidth
    )
  }, [viewport.current])

  return (
    <nav className={styles.root}>
      <Link className={styles.brand} to="/">
        {data.site.siteMetadata.title}
      </Link>
      <div ref={viewport}>
        <ul>
          {data.categoriesGroup.group.map((elem) => (
            <li key={elem.fieldValue}>
              <Link
                className={`nav-${elem.fieldValue}`}
                activeClassName="active"
                to={`/categories/${elem.fieldValue}/`}
              >
                {elem.fieldValue}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
