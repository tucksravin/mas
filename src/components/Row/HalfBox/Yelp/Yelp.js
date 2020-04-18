import React from 'react'
import classes from './Yelp.module.css'
import yelp from '../../../../images/yelp-logo-black.png'

const Yelp = props => (
  <img src={yelp} className={classes.yelp}/>
)

export default Yelp
