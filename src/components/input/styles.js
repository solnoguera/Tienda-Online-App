import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "OpenSansMedium",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginBottom: 20,
  },
  message: {},
  helperText: {
    fontFamily: "OpenSans",
    fontSize: 12,
    color: colors.error,
  },
});
