import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import estilo from '../estilo'
import Filho from './Filho'

export default props => {

    let x = 100
    let y = 13
   return (
       <Filho a={x} b={y}/>
   )
}