import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { OrderItem } from "../../components";

const OrdersScreen = () => {
  const items = [];
  const total = 0;
  const dispatch = useDispatch();

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
