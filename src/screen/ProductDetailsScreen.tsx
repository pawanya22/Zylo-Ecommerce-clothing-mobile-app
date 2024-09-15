import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    ImageSourcePropType,
  } from "react-native";
  import React, { useContext, useState } from "react";
  import LinearGradient from "react-native-linear-gradient";
  import Header from "../components/Header";
  import { fonts } from "../utils/fonts";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { NativeStackNavigationProp } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../navigation/types"; // Adjust the import based on your navigation setup
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
    'ProductDetails'
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
  
    return (
      <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Header isCart={false} />
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
      color: "#444444",
    },
    sizeText: {
      marginTop: 20,
    },
    sizeContainer: {
      flexDirection: "row",
      marginTop: 5,
      marginBottom: 5,
    },
    sizeValueContainer: {
      backgroundColor: "#FFFFFF",
      height: 40,
      width: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 5,
    },
    sizeValueText: {
      fontSize: 18,
      fontFamily: fonts.regular,
      fontWeight: "700",
    },
    selectedText: {
      color: "#E55B5B",
    },
    colorContainer: {
      flexDirection: "row",
    },
    borderColorCircle: {
      height: 48,
      width: 48,
      padding: 5,
      marginHorizontal: 5,
    },
    colorCircle: {
      flex: 1,
      borderRadius: 18,
    },
    button: {
      backgroundColor: "#E96E6E",
      height: 62,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      marginTop: 20,
    },
    buttonText: {
      fontSize: 24,
      color: "#FFFFFF",
      fontWeight: "700",
      fontFamily: fonts.regular,
    },
  });