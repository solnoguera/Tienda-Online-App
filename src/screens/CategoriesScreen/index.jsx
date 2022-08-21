import React from "react";
import { View, Text, Button } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Categorías</Text>
      <Button
        title="Ir a Productos"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
};

export default CategoriesScreen;
