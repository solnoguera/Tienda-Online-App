import React from "react";
import { styles } from "./styles";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, confirmCart } from "../../store/actions/cart.actions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.total);

  const onDelete = (id) => {
    console.warn("Deleted id: " + id);
    dispatch(removeItem(id));
  };
  const onConfirm = () => {
    dispatch(confirmCart(items, total));
  };

  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  const disabledConfirm = total === 0;
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
        <TouchableOpacity
          disabled={disabledConfirm}
          style={
            disabledConfirm ? styles.disabledConfirm : styles.buttonConfirm
          }
          onPress={onConfirm}
        >
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
