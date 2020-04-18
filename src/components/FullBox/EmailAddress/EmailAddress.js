import React from 'react'
import Obfuscate from "react-obfuscate"
import classes from './Email.module.css'

const Email = props => (

  <Obfuscate className={classes.email} email="mikesappliance@att.net">Click Here!</Obfuscate>
)

export default Email
