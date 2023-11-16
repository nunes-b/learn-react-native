import Texto from "../../../components/texto";
import { View, Image, StyleSheet, FlatList, SafeAreaView } from "react-native";

export default function Item({ item: { nome, imagem } }) {
  return (
    <View key={nome} style={estilos.item}>
      <Image source={imagem} style={estilos.imagem} />
      <Texto style={estilos.texto}>{nome}</Texto>
    </View>
  );
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    alignItems: "center",
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },
  imagem: {
    width: 46,
    height: 46,
  },
  texto: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
