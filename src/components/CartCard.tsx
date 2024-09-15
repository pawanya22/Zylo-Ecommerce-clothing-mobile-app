// src/components/CartCard.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CartCardProps {
  item: {
    id: number;
    title: string;
    price: number;
  };
  handleDelete: (id: number) => void; // Ensure the id type matches
}

const CartCard: React.FC<CartCardProps> = ({ item, handleDelete }) => {
  return (
    <View style={styles.card}>
      <Text>{item.title}</Text>
      <Text>${item.price.toFixed(2)}</Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default CartCard;
