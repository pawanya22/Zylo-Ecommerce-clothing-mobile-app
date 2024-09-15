import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  // Automatically navigate to MainApp (which contains the tab navigation) after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('MainApp');  // Navigate to MainApp, which contains HOME
    }, 3000);
    return () => clearTimeout(timeout); // Clear the timeout on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/account.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to Our App!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainApp')}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444444',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E96E6E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
