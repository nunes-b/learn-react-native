import { FlatList, StyleSheet, View } from "react-native";
import Topo from "./components/topo";
import Detalhes from "./components/detalhes";
import item from "./components/item";
import Texto from "../../components/texto";

export function Cesta({ topo, detalhes, itens }) {
  return (
    <FlatList
      data={itens.lista}
      renderItem={item}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {
        return (
          <>
            <Topo {...topo} />
            <View style={estilos.cesta}>
              <Detalhes {...detalhes} />
              <Texto style={estilos.titulo}>{itens.titulo}</Texto>
            </View>
          </>
        );
      }}
    ></FlatList>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
