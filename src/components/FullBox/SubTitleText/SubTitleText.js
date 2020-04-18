import React from 'react'
import classes from './SubTitleText.module.css'


const SubTitleText = props => (

  <h1 className={classes.subtitle}>{props.children}</h1>
)

export default SubTitleText
