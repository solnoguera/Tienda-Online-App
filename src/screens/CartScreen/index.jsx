import React from "react";
import { styles } from "./styles";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../components";
import { CART } from "../../constants/data/cart";

const CartScreen = () => {
  const items = CART;
  const total = 1200;

  const onDelete = (id) => {
    console.warn("Deleted id: " + id);
  };
  const onConfirm = () => console.warn("Confirmado");

  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={onConfirm}>
          <Text style={styles.confirm}>Confirmar</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTitle}>Total</Text>
            <Text style={styles.total}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;