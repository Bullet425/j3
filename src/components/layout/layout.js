import React from "react"
import Helmet from "react-helmet"
import SidebarMenu from "./sidebarMenu"
import Footer from "./footer"
import "../../css/layout/layout.module.css"
import favicon from "../../images/favicon.ico"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>
          Soluciones tecnologicas innovadoras y personalizadas | J3 Solutions
        </title>
        <link rel="icon" href={favicon} />
        <meta
          name="description"
          content="En J3 solutions nos enfocamos en diseñar y crear soluciones personalizadas, teniendo como base las mejores tecnologias y practicas."
        />
        <script
          src="https://kit.fontawesome.com/a38ec667bd.js"
          crossOrigin="anonymous"
          SameSite="Lax"
        ></script>
      </Helmet>
      <SidebarMenu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
