import Header from './header'
import Footer from './footer'
import styles from './layout.module.scss'

interface LayoutProps {}

const Layout = ({ children }: React.PropsWithChildren<LayoutProps>) => (
  <div className={styles.root}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
