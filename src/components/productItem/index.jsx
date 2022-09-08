import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onSelected(item)}
        style={styles.containerTouchable}
      >
        <View>
          <Text style={styles.name}>{item?.name}</Text>
        </View>
        <View>
          <Text style={styles.price}>{item?.price}</Text>
          <Text style={styles.description}>{item?.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
