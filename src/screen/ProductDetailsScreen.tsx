import React, { useContext, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import { fonts } from "../utils/fonts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types"; // Adjust the import based on your navigation setup
import { CartContext } from "../context/CartProvider";
import { Product } from "../types"; // Adjust the import based on your types definition

const colorsArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];

type ProductDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PRODUCT_DETAILS'
>;

const ProductDetailsScreen: React.FC = () => {
  const { addToCartItem } = useContext(CartContext);
  const route = useRoute();
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();

  const product = route.params.item as Product; // Adjust based on your route params
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("#B11D1D");

  const handleAddToCart = () => {
    product.color = selectedColor;
    product.size = selectedSize;
    addToCartItem(product);
    navigation.navigate("CART");
  };

  const handleGoBack = () => {
    navigation.navigate("HOME"); // Adjust "HOME" based on your actual home route name
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Header isCart={true} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.coverImage} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.fontText}>{product.title}</Text>
            <Text style={styles.fontText}>${product.price}</Text>
          </View>
          <Text style={[styles.fontText, styles.sizeText]}>Size</Text>
          <View style={styles.sizeContainer}>
            {["S", "M", "L", "XL"].map((size) => (
              <TouchableOpacity
                key={size}
                style={styles.sizeValueContainer}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[
                    styles.sizeValueText,
                    selectedSize === size && styles.selectedText,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.fontText, styles.sizeText]}>Color</Text>
          <View style={styles.colorContainer}>
            {colorsArray.map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedColor(color)}
              >
                <View
                  style={[
                    styles.borderColorCircle,
                    selectedColor === color && {
                      borderColor: color,
                      borderWidth: 2,
                      borderRadius: 24,
                    },
                  ]}
                >
                  <View
                    style={[styles.colorCircle, { backgroundColor: color }]}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    padding: 15,
  },
  backButton: {
    marginRight: 10, // Adjust margin for spacing between back button and header
  },
  backIcon: {
    width: 24, // Adjust the size of the back icon image
    height: 24,
    resizeMode: "contain",
  },
  imageContainer: {
    height: 420,
    width: "100%",
  },
  coverImage: {
    resizeMode: "cover",
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontText: {
    fontSize: 20,
    fontFamily: fonts.regular,
    fontWeight: "700",
  },
  sizeText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "700",
  },
  sizeContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  sizeValueContainer: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#FFFFFF",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  sizeValueText: {
    fontSize: 18,
    fontWeight: "700",
  },
  selectedText: {
    color: "#E96E6E",
  },
  colorContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  borderColorCircle: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 24,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#E96E6E",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
