import React from 'react'
import { Link } from 'gatsby'
import styles from './404.module.scss'
import Layout from '../components/layout'
import SEO from '../components/seo'

const PageNotFound = () => (
  <Layout>
    <SEO title="페이지를 찾을 수 없습니다." />
    <div className={styles.root}>
      <h1>
        <span role="img" aria-label="Not Found">
          🤔
        </span>
      </h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to="/">메인으로</Link>
    </div>
  </Layout>
)

export default PageNotFound
