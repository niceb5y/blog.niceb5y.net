import React from 'react'
import Header from './header'
import Footer from './footer'

interface LayoutProps {}

const Layout = ({ children }: React.PropsWithChildren<LayoutProps>) => (
  <div className="container">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
