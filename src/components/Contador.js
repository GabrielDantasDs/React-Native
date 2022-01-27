import React, { useState } from "react";
import { Text, Button } from 'react-native';
import estilo from "./estilo";

export default ({inicial, passo}) => {
    const [numero, setNumero] = useState(inicial)

    const inc = () => {setNumero(numero + 1)}
    const dec = () => {setNumero(numero - 1)}

    return (
        <>
            <Text style={estilo.txtG}>{numero}</Text>
            <Button title="inc"onPress={inc}></Button>
            <Button title="dec" onPress={dec}></Button>
        </>
    )
}