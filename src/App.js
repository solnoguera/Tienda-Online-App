import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import ShopNavigator from "./navigation/ShopNavigator";

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require("../assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("../assets/fonts/OpenSans-Bold.ttf"),
    OpenSansLight: require("../assets/fonts/OpenSans-Light.ttf"),
    OpenSansItalic: require("../assets/fonts/OpenSans-Italic.ttf"),
    OpenSansMedium: require("../assets/fonts/OpenSans-Medium.ttf"),
  });
  return loaded ? <ShopNavigator /> : <AppLoading />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
