import React from "react";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/colors";

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};
const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{formatDate(item.date)}</Text>
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <Text style={styles.total}>${item.total}</Text>
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

export default OrderItem;
