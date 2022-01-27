import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import estilo from '../estilo'

export default props => {
   return (
       <>
            <Text>{props.a}</Text>
            <Text>{props.b}</Text>
       </>
   )
}