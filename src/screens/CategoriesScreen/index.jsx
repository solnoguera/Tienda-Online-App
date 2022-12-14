import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { CategoryItem } from "../../components/index";
import { selectCategory } from "../../store/actions/category.actions";
import { styles } from "./styles";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  const onSelected = (category) => {
    dispatch(selectCategory(category.id));
    navigation.navigate("Products", {
      name: category.name,
    });
  };
  //DATO: EL RENDER ITEM RECIBE UN OBJETO Y DESESTRUCTURAMOS SIEMPREEE item PORQUE LA DATA VIENE AHI ADENTRO.
  const renderItem = ({ item }) => {
    console.warn(item);
    return <CategoryItem item={item} onSelected={() => onSelected(item)} />;
  };
  const keyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
