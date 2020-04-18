import React from 'react'
import classes from './FullBox.module.css'

const FullBox = props => (

  <div className={classes.fbox}>
    {props.children}
  </div>
)

export default FullBox
