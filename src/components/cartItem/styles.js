import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    margin: 10,
    height: 100,
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: colors.black,
    borderColor: colors.primary,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  containerDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 16,
    fontFamily: "OpenSansBold",
    color: colors.text,
    marginBottom: 5,
  },
  detail: {},
  quantity: {
    fontSize: 14,
    fontFamily: "OpenSans",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontFamily: "OpenSansBold",
  },
});
