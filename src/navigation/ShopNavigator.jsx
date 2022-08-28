import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/colors";
import {
  CategoriesScreen,
  ProductsScreen,
  DetailScreen,
} from "../screens/index";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
      <Stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
      {/** En la screen recibo el parametro y seteo el titulo del header para que se visualice la categoria.*/}
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route, navigation }) => ({
          headerTitle: route.params.name,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({ headerTitle: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
