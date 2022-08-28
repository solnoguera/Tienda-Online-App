import { StyleSheet, Platform, StatusBar } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textLight,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
