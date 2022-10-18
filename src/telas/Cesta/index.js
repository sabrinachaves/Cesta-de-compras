import React from "react";
import { View, StyleSheet } from "react-native";
import Topo from "../Cesta/componentes/Topo"
import Detalhes from "../Cesta/componentes/Detalhes";

export default function Cesta({ topo, detalhes }) {
  return (
    <>
      <Topo {...topo} />
      <View style={estilos.cesta}>
      <Detalhes {...detalhes} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
