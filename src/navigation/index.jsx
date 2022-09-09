import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./TabNavigation";
import { useSelector } from "react-redux";
import { AuthScreen } from "../screens";

const AppNavigator = () => {
  const userId = useSelector((store) => store.auth.userId);
  return (
    <NavigationContainer>
      {userId ? <BottomTab /> : <AuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
