import React from "react";
import { View, Text, StyleSheet } from "react-native";
// Buscamos los iconos en https://icons.expo.fyi/
import IonicIcons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrdersNavigator from "./OrdersNavigator";
import CartNavigator from "./CartNavigator";
import ShopNavigator from "./ShopNavigator";
import { colors } from "../constants/colors";

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <IonicIcons
                name={focused ? "home" : "home-outline"}
                size={20}
                color={colors.primary}
              />
              <Text style={styles.text}>Shop</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <IonicIcons
                name={focused ? "cart" : "cart-outline"}
                size={20}
                color={colors.primary}
              />
              <Text style={styles.text}>Cart</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <IonicIcons
                name={focused ? "file-tray-full" : "file-tray-full-outline"}
                size={20}
                color={colors.primary}
              />
              <Text style={styles.text}>Orders</Text>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBarIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "OpenSansMedium",
    fontSize: 14,
  },
});
