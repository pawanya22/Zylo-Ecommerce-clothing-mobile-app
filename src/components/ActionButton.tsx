import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle, StyleProp, View } from 'react-native';

interface ActionButtonProps {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onPress, text, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[style, { padding: 10, backgroundColor: 'transparent', position: 'absolute', bottom: 15, right: 80  }]}>
        <Text style={{ color: '#5A7FD6' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActionButton;
