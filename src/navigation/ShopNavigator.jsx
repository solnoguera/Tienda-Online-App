import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CategoriesScreen,
  CategoyBreadScreen,
  BreadDetailScreen,
} from "../screens/index";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={CategoriesScreen} />
        <Stack.Screen name="Products" component={CategoyBreadScreen} />
        <Stack.Screen name="Detail" component={BreadDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
