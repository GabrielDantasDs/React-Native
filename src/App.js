import React from "react";
import { View, StyleSheet } from "react-native";
import Aleatorio from "./components/Aleatorio";
import MinMax from "./components/MinMax";
import Titulo from "./components/Fragment";

import CompPadrao, { Comp1, Comp2 } from "./components/Multi";
import Primeiro from "./components/Primeiro";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import Pai from "./components/direta/Pai";

export default () => (
    <View style={style.App}>
        <Pai/>
        {/*<Aleatorio min={3} max={20} />
        <Contador inicial={100} passo={20}></Contador>
        <Botao/>
        <Titulo primario={"Primeiro titilo"} secundario={"Segundo titulo"}/>
        *<MinMax  min="3" max="20"/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
});
