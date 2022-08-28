import React from "react";
import { View, Text, Button } from "react-native";
import { PRODUCTS } from "../../constants/data/products";
import { styles } from "./styles";

const DetailScreen = ({ navigation, route }) => {
  const { productId } = route.params;
  const product = PRODUCTS.find((item) => item.id === productId);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default DetailScreen;
