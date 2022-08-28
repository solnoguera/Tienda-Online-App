import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { PRODUCTS } from "../../constants/data/products";
import { ProductItem } from "../../components/index";
import { styles } from "./styles";

const ProductsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const productsCategory = PRODUCTS.filter(
    (item) => item.category === categoryId
  );
  const onSelected = (item) => {
    navigation.navigate("Detail", {
      productId: item.id,
      name: item.name,
    });
  };
  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={() => onSelected(category)} />
  );
  const keyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView>
      <FlatList
        data={productsCategory}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;
