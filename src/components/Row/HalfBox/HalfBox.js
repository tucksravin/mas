import React from 'react'
import classes from './HalfBox.module.css'

const HalfBox = props => (

  <div className={classes.hBox}> {props.children} </div>
)

export default HalfBox
