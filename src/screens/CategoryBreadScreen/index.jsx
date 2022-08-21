import React from "react";
import { View, Text, Button } from "react-native";

const CategoyBreadScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Products Screen</Text>
      <Button
        title="Ir a Detalle"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

export default CategoyBreadScreen;
