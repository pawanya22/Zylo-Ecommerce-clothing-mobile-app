import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface DeleteButtonProps {
  onPress: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.deleteButton, styles.rightBottom]}>
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  deleteButtonText: {
    fontSize: 16,
    color: '#5A7FD6',
    fontFamily: 'roboto',
  },
  rightBottom: {
    position: 'absolute',
    bottom: 15,
    right: 30,
  },
});

export default DeleteButton;
