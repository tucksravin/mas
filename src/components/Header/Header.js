import React from "react"
import classes from './Header.module.css'

const Header = props => (
  <h1 className={classes.title}>{props.siteTitle}</h1>
)


export default Header
