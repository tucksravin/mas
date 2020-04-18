import React from 'react'
import Obfuscate from "react-obfuscate"
import classes from './PhoneNumber.module.css'

const PhoneNumber = props => (

  <Obfuscate className={classes.phone} tel="4158838899"> 1-(415)-883-8899</Obfuscate>
)

export default PhoneNumber
