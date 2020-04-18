import React from 'react'
import Obfuscate from "react-obfuscate"
import classes from './PhoneNumber.module.css'

const PhoneNumber = props => (

  <Obfuscate className={classes.phone} tel="4158838899">Call Mike!</Obfuscate>
)

export default PhoneNumber
