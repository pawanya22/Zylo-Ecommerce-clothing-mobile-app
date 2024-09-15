// src/context/CartProvider.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState, ReactNode } from 'react';

// Define types for cart items and context
interface CartItem {
  id: number; // Ensure id is of type number if used as such
  title: string;
  price: number;
  [key: string]: any; // Allow any additional properties
}

interface CartContextType {
  cartItems: CartItem[];
  addToCartItem: (item: CartItem) => Promise<void>;
  deleteCartItem: (id: number) => Promise<void>; // Ensure type is number
  totalPrice: string;
}

// Define the context type
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<string>('0.00');

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    const cartItemsString = await AsyncStorage.getItem('cart');
    const cartItems: CartItem[] = cartItemsString ? JSON.parse(cartItemsString) : [];
    setCartItems(cartItems);
    calculateTotalPrice(cartItems);
  };

  const addToCartItem = async (item: CartItem) => {
    const cartItemsString = await AsyncStorage.getItem('cart');
    const cartItems: CartItem[] = cartItemsString ? JSON.parse(cartItemsString) : [];
    const isExist = cartItems.findIndex((cart) => cart.id === item.id);
    if (isExist === -1) {
      const updatedCartItems = [...cartItems, item];
      calculateTotalPrice(updatedCartItems);
      setCartItems(updatedCartItems);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
  };

  const deleteCartItem = async (id: number) => {
    const cartItemsString = await AsyncStorage.getItem('cart');
    const cartItems: CartItem[] = cartItemsString ? JSON.parse(cartItemsString) : [];
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const calculateTotalPrice = (cartItems: CartItem[]) => {
    const totalSum = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalSum.toFixed(2));
  };

  const value: CartContextType = {
    cartItems,
    addToCartItem,
    deleteCartItem,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};