// src/screen/CartScreen.tsx

import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useContext } from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  import Header from '../components/Header';
  import CartCard from '../components/CartCard';
  import { fonts } from '../utils/fonts';
  import { CartContext } from '../context/CartProvider';
  
  const CartScreen: React.FC = () => {
    const { cartItems, deleteCartItem, totalPrice } = useContext(CartContext);
  
    // Ensure context is defined before accessing its properties
    if (!cartItems) {
      return <Text>Loading...</Text>; // Handle the undefined cartItems case
    }
  
    const handleDeleteItem = (id: number) => {
      deleteCartItem(id);
    };
  
    return (
      <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
        <View style={styles.header}>
          <Header isCart={true} />
        </View>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <CartCard item={item} handleDelete={handleDeleteItem} />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
          ListFooterComponent={
            <>
              <View style={styles.bottomContentContainer}>
                <View style={styles.flexRowContainer}>
                  <Text style={styles.titleText}>Total:</Text>
                  <Text style={styles.priceText}>${totalPrice}</Text>
                </View>
                <View style={styles.flexRowContainer}>
                  <Text style={styles.titleText}>Shipping:</Text>
                  <Text style={styles.priceText}>$0.0</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.flexRowContainer}>
                  <Text style={styles.titleText}>Grand Total:</Text>
                  <Text style={[styles.priceText, styles.grandPriceText]}>
                    ${totalPrice}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
              </TouchableOpacity>
            </>
          }
        />
      </LinearGradient>
    );
  };
  
  export default CartScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
    },
    header: {},
    flexRowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    bottomContentContainer: {
      marginHorizontal: 10,
      marginTop: 30,
    },
    titleText: {
      fontSize: 18,
      color: '#757575',
      fontWeight: '500',
    },
    priceText: {
      fontSize: 18,
      color: '#757575',
      fontWeight: '600',
    },
    divider: {
      borderWidth: 1,
      borderColor: '#C0C0C0',
      marginTop: 10,
      marginBottom: 5,
    },
    grandPriceText: {
      color: '#3C3C3C',
      fontWeight: '700',
    },
    button: {
      backgroundColor: '#cfa25d',
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      marginTop: 30,
      width: 200,
      marginLeft: 80,
    },
    buttonText: {
      fontSize: 24,
      color: '#FFFFFF',
      fontWeight: '700',
      fontFamily: fonts.regular,
    },
  });