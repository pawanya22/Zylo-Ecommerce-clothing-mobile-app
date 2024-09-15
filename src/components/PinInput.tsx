import React from 'react';
import { View, ViewStyle } from 'react-native';

interface PinInputProps {
  pin: string;
  styles: {
    pinContainer: ViewStyle;
    pinCircleFilled: ViewStyle;
    pinCircle: ViewStyle;
  };
}

const PinInput: React.FC<PinInputProps> = ({ pin, styles }) => {
  return (
    <View style={styles.pinContainer}>
      {pin.split('').map((_, index) => (
        <View key={index} style={styles.pinCircleFilled} />
      ))}
      {[...Array(4 - pin.length)].map((_, index) => (
        <View key={index} style={styles.pinCircle} />
      ))}
    </View>
  );
};

export default PinInput;
