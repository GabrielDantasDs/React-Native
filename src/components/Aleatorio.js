import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";


export default ({min, max}) => {

    const delta = max - min + 1 
    const numeroAleatorio =  parseInt(Math.random() * delta) + min

    return (
        <Text style={Estilo.txtG}>
            O valor aleatorio é {numeroAleatorio}
        </Text>
    )
}