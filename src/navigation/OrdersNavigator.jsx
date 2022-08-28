import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrdersScreen } from "../screens/index";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
