import { StatusBar, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
//imports
import { Cesta } from "./src/telas/cesta";
import mock from "./src/mocks/cesta";

export default function App() {
  const [fontCarregada] = useFonts({
    Regular: Montserrat_400Regular,
    Negrito: Montserrat_700Bold,
  });

  if (!fontCarregada) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
