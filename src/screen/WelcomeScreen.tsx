import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const handleNavigate = () => {
    navigation.navigate('Login'); // Navigate to LoginScreen
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/woman.webp')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        {/* Replace the title text with an image */}
        <Image source={require('../assets/loogo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Text style={styles.buttonText}>L  o  g  i  n</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '120%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a semi-transparent overlay for better text visibility
  },
  logo: {
    width: 300, // Adjust the size of the logo image
    height: 300,
    resizeMode: 'contain',
    marginTop: 130,
  },
  button: {
    marginTop: 180,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '400',
  },
});
