import React from "react"

import Header from "./header"
import "./layout.css"
import Helmet from "react-helmet"
import SidebarMenu from "./sidebarMenu"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/a38ec667bd.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <Header />
      <SidebarMenu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
