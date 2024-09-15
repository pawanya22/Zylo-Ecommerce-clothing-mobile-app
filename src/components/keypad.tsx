import React from 'react';
import { FlatList, TextStyle, View, ViewStyle } from 'react-native';
import KeypadButton from './KeypadButton';

interface KeypadProps {
  keypadData: string[];
  handlePinPress: (value: string) => void;
  lockout: boolean;
  styles: {
    keypadButton: ViewStyle;
    keypadButtonDisabled: ViewStyle;
    keypadButtonText: TextStyle;
    emptyKeypadButton: ViewStyle; // Add the missing style
  };
}

const Keypad: React.FC<KeypadProps> = ({ keypadData, handlePinPress, lockout, styles }) => {
  const renderKeypadItem = ({ item }: { item: string }) => {
    if (item === '') {
      return <View style={styles.emptyKeypadButton} />;
    }

    return (
      <KeypadButton
        item={item}
        onPress={handlePinPress}
        disabled={lockout}
        styles={styles} // Pass the complete styles object
      />
    );
  };

  return (
    <FlatList
      data={keypadData}
      numColumns={3}
      renderItem={renderKeypadItem}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default Keypad;
