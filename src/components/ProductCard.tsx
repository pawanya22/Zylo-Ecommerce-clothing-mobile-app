import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../utils/fonts";

// Define types for props
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  isFavorite: boolean;
}

interface ProductCardProps {
  item: Product;
  handleProductClick: (item: Product) => void;
  toggleFavorite: (item: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  item,
  handleProductClick,
  toggleFavorite,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleProductClick(item);
      }}
    >
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.likeContainer}>
        <TouchableOpacity
          onPress={() => {
            toggleFavorite(item);
          }}
        >
          {item.isFavorite ? (
            <Image
              source={require("../assets/favoriteFilled.png")}
              style={styles.favorite}
            />
          ) : (
            <Image
              source={require("../assets/favorite.png")}
              style={styles.favorite}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  coverImage: {
    height: 256,
    width: "100%",
    borderRadius: 20,
    position: "relative",
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.regular,
    fontWeight: "700",
    color: "#444444",
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.medium,
  },
  likeContainer: {
    position: "absolute",
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    right: 10,
    top: 10,
  },
  favorite: {
    height: 20,
    width: 20,
  },
});