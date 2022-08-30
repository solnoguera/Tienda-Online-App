import React from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { styles } from "./styles";

const DetailScreen = () => {
  const product = useSelector((store) => store.products.selected);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default DetailScreen;
