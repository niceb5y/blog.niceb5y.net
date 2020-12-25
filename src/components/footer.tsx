import { graphql, useStaticQuery } from 'gatsby'
import styles from './footer.module.scss'
import { Site } from '../entities'

const Footer = () => {
  const data: { site: Site } = useStaticQuery(graphql`
    query footerQuery {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  return (
    <footer className={styles.root}>
      <hr />
      <p>{data.site.siteMetadata.copyright}</p>

      <noscript key="noscript" id="gatsby-noscript">
        <p>이 블로그는 JavaScript를 사용할 때 더 좋은 경험을 제공합니다.</p>
      </noscript>
    </footer>
  )
}

export default Footer
