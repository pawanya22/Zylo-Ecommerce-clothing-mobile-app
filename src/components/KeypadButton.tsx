import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

interface KeypadButtonProps {
  item: string;
  onPress: (item: string) => void;
  disabled: boolean;
  styles: {
    keypadButton: ViewStyle;
    keypadButtonDisabled: ViewStyle;
    keypadButtonText: TextStyle;
  };
}

const KeypadButton: React.FC<KeypadButtonProps> = ({ item, onPress, disabled, styles }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[styles.keypadButton, disabled ? styles.keypadButtonDisabled : undefined]}
      disabled={disabled}
    >
      <Text style={styles.keypadButtonText}>{item}</Text>
    </TouchableOpacity>
  );
};

export default KeypadButton;
