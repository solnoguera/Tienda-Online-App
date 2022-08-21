import React from "react";
import { View, Text, Button } from "react-native";

const BreadDetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Detail Screen</Text>
      <Button title="Ir a Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default BreadDetailScreen;
