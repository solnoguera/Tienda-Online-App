import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import AppNavigator from "./navigation/index";

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require("../assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("../assets/fonts/OpenSans-Bold.ttf"),
    OpenSansLight: require("../assets/fonts/OpenSans-Light.ttf"),
    OpenSansItalic: require("../assets/fonts/OpenSans-Italic.ttf"),
    OpenSansMedium: require("../assets/fonts/OpenSans-Medium.ttf"),
  });
  if (loaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
