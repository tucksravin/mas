/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./Header/Header"
import classes from "./Layout.module.css"

const Layout = ({ children }) => {

  return (
    <>
      <div className={classes.backdrop}>
      <Header siteTitle="Mike's Appliance Service"/>
          <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a style={{fontSize:'1em'}} href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
