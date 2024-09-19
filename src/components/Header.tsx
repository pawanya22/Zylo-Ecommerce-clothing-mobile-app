import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../utils/fonts";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Define navigation types
type RootStackParamList = {
  HOME: undefined;
  CART: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, "CART">;

// Define props for the component
interface HeaderProps {
  isCart: boolean;
}

const Header: React.FC<HeaderProps> = ({ isCart }) => {
  const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.navigate("HOME");
  };

  
  return (
    <View style={styles.header}>
      {isCart ? (
        <TouchableOpacity
          style={styles.appDrawerContainer}
          onPress={handleBack}
        >
          <Image
            source={require("../assets/arrowback.png")}
            style={styles.appBackIcon}
          />
        </TouchableOpacity>
      ) : null}

      {isCart ? <Text style={styles.titleText}>My Cart</Text> : null}
    </View>
  );
};


export default Header;

// Styles
const styles = StyleSheet.create({
  appDrawerContainer: {
    height: 30,
    width: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  appDrawerIcon: {
    height: 20,
    width: 20,
  },
  appBackIcon: {
    height: 10,
    width: 20,
    marginLeft: 10,
  },
  profileImage: {
    height: 44,
    width: 44,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 20,
    fontFamily: fonts.regular,
    color: "#000000",
    marginRight: 140,
  },
});