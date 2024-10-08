// HomeScreen.tsx
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import Tags from "../components/Tags";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HOME'>;

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState(data.products);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleProductDetails = (item: any) => {
    navigation.navigate("PRODUCT_DETAILS", { item });
  };

  const toggleFavorite = (item: any) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === item.id) {
          return {
            ...prod,
            isFavorite: !prod.isFavorite,
          };
        }
        return prod;
      })
    );
  };

  return (
    <LinearGradient colors={["white", "white"]} style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header isCart={false} />
            <View>
              <Text style={styles.headingText}>zylo</Text>
              
            </View>
            <Tags />
          </>
        }
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            handleProductClick={handleProductDetails}
            toggleFavorite={toggleFavorite}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headingText: {
    marginLeft: 150,
    fontSize: 28,
    color: "#000000",
    marginVertical: 5,
    marginBottom: 10,
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
});
