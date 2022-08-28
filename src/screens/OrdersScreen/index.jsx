import React from "react";
import { styles } from "./styles";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { OrderItem } from "../../components";
import { ORDERS } from "../../constants/data/orders";

const OrdersScreen = () => {
  const items = ORDERS;
  const total = 1200;

  const onDelete = (id) => {
    console.warn("Deleted id: " + id);
  };
  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDelete} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default OrdersScreen;
