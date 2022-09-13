import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black,
    borderColor: colors.primary,
    shadowOpacity: 0.86,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    elevation: 7,
  },
  container: {
    width: "80%",
    height: 380,
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 18,
    fontFamily: "OpenSansMedium",
    marginBottom: 15,
    textAlign: "center",
  },
  prompt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  promptMessage: {
    fontSize: 14,
    fontFamily: "OpenSansBold",
    color: colors.text,
    marginRight: 15,
  },
  promptButton: {},
  footer: {
    paddingVertical: 25,
  },
});
