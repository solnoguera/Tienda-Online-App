import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  list: {
    flex: 1,
  },
  footer: {
    borderTopColor: colors.primary,
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  buttonConfirm: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  disabledConfirm: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  confirm: {
    fontFamily: "OpenSansMedium",
    fontSize: 14,
  },
  totalContainer: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalTitle: {
    fontFamily: "OpenSansMedium",
    fontSize: 14,
  },
  total: {
    fontFamily: "OpenSansBold",
    fontSize: 16,
  },
});
