import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    margin: 20,
    height: 190,
  },
  containerTouchable: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  itemName: {
    fontSize: 20,
    fontFamily: "OpenSansBold",
    color: colors.text,
  },
});
