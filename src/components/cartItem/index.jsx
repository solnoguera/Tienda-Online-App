import React from "react";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/colors";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        style={styles.containerTouchable}
      >
        <IonicIcons name="trash" size={20} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
