import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens/index";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "ios" ? colors.primary : colors.secondary,
        },
        headerTintColor: Platform.OS === "ios" ? colors.textLight : colors.text,
        headerTitleStyle: {
          fontFamily: "OpenSansBold",
        },
      }}
    >
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
