import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./styles";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { OrderItem } from "../../components";
import { deleteOrder, getOrders } from "../../store/actions/order.actions";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.order.orders);

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const onDelete = (id) => {
    console.warn("Deleted id: " + id);
    dispatch(deleteOrder(id));
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
