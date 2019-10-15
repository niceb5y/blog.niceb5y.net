import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ title, children }) => (
  <div className="container">
    <Header title={title} />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
