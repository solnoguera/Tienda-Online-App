import React, { useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { PRODUCTS } from "../../constants/data/products";
import { ProductItem } from "../../components/index";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  filteredProducts,
  selectProduct,
} from "../../store/actions/products.actions";

const ProductsScreen = ({ navigation }) => {
  const categorySelected = useSelector((store) => store.category.selected);
  const dispatch = useDispatch();

  //Como ya despache la accion de filtrado en el useEffect, llamo a los productos filtrados
  const products = useSelector((store) => store.products.filteredProducts);

  useEffect(() => {
    dispatch(filteredProducts(categorySelected?.id));
  }, []);
  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("Detail", {
      name: item.name,
    });
  };
  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={() => onSelected(item)} />
  );
  const keyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;
