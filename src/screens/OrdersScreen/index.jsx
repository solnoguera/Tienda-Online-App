import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { OrderItem } from "../../components";
import { getOrders } from "../../store/actions/order.actions";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.order.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

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
          data={orders}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default OrdersScreen;
