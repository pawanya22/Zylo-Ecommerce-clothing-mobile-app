import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types"; // Adjust the import based on your navigation setup
import data from "../data/data.json";

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const tags: string[] = ["Trending Now", "All", "New", "Fashion", "Mens"];

const Tags: React.FC = () => {
  const [selected, setSelected] = useState<string>("Trending Now");
  const [products, setProducts] = useState<Product[]>(data["Trending Now"] || []);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setProducts(data[selected] || []);
  }, [selected]);

  const handleTagPress = (tag: string) => {
    setSelected(tag);
  };

  const handleProductPress = (product: Product) => {
    navigation.navigate('PRODUCT_DETAILS', { item: product });
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={tags}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleTagPress(item)}>
            <Text
              style={[
                styles.tagText,
                item === selected ? styles.isSelected : null,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.tagContainer}
        keyExtractor={(item) => item}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <View style={styles.productContainer}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.productList}
        numColumns={2}
      />
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  tagText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#DFDCDC",
    color: "#938F8F",
    fontWeight: "700",
  },
  isSelected: {
    backgroundColor: "#E96E6E",
    color: "#FFFFFF",
  },
  container: {
    marginVertical: 10,
  },
  tagContainer: {
    paddingHorizontal: 10,
  },
  productList: {
    marginTop: 20,
    justifyContent: 'space-between',
  },
  productContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  productImage: {
    width: 160,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    fontWeight: "700",
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#888888",
  },
});
