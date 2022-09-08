import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Button } from "react-native";
import { addItem } from "../../store/actions/cart.actions";
import { styles } from "./styles";
import { colors } from "../../constants/colors";

const DetailScreen = () => {
  const product = useSelector((store) => store.products.selected);
  const dispatch = useDispatch();
  const onAdd = () => {
    dispatch(addItem(product));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button
        title="Agregar Al Carrito"
        onPress={onAdd}
        color={colors.primary}
      />
    </View>
  );
};

export default DetailScreen;
