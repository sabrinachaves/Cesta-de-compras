import React from "react";
import { View, StyleSheet } from "react-native";
import Topo from "../Cesta/componentes/Topo"
import Detalhes from "../Cesta/componentes/Detalhes";

export default function Cesta() {
  return (
    <>
      <Topo />
      <View style={estilos.cesta}>
      <Detalhes />
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
