// src/components/CartCard.tsx

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Product } from '../types'; // Adjust import based on your types

interface CartCardProps {
  item: Product;
  handleDelete: (id: number) => void;
}

const CartCard: React.FC<CartCardProps> = ({ item, handleDelete }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#757575',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#E96E6E',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});