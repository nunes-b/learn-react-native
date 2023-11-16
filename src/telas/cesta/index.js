import { ScrollView, StyleSheet, View } from "react-native";
import Topo from "./components/topo";
import Detalhes from "./components/detalhes";
import Itens from "./components/itens";

export function Cesta({ topo, detalhes, itens }) {
  return (
    <ScrollView>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
        <Itens {...itens} />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
