import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    margin: 20,
    height: 160,
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
  name: {
    fontSize: 14,
    fontFamily: "OpenSansBold",
    color: colors.text,
  },
  price: {
    fontSize: 15,
    fontFamily: "OpenSansMedium",
    color: colors.text,
  },
  description: {
    fontSize: 12,
    fontFamily: "OpenSansLight",
    color: colors.text,
  },
});
