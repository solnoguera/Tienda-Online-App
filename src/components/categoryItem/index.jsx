import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onSelected(item)}
        style={{ ...styles.containerTouchable, backgroundColor: item?.color }}
      >
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
