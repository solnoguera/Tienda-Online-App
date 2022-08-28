import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { CATEGORIES } from "../../constants/data/categories";
import { CategoryItem } from "../../components/index";
import { styles } from "./styles";

const CategoriesScreen = ({ navigation }) => {
  const onSelected = (category) => {
    navigation.navigate("Products", {
      categoryId: category.id,
      name: category.name,
    });
  };
  const renderItem = ({ category }) => (
    <CategoryItem item={category} onSelected={() => onSelected(category)} />
  );
  const keyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
