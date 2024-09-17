import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
import CartScreen from './src/screen/CartScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';
import ReorderScreen from './src/screen/ReorderScreen';
import LoginScreen from './src/screen/LoginScreen'; // Import LoginScreen
import SignUpScreen from './src/screen/SignUpScreen'; // Import SignUpScreen
import ProfileScreen from './src/screen/ProfileScreen'; // Import ProfileScreen
import { CartContext, CartProvider } from './src/context/CartProvider';
import { Image, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Home stack containing Home and Product Details
const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

// Tab Navigator with Home, Reorder, Cart, and Account
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HOME_STACK"
        component={MyHomeStack}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={focused ? require('./src/assets/focused/home.png') : require('./src/assets/normal/home.png')}
              style={{ height: size, width: size, resizeMode: 'center' }}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="CART"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, size }) => {
            const { cartItems } = useContext(CartContext);
            return (
              <View style={{ position: 'relative' }}>
                <Image
                  source={focused ? require('./src/assets/focused/shopping_cart.png') : require('./src/assets/normal/shopping_cart.png')}
                  style={{ height: size, width: size, resizeMode: 'center' }}
                />
                {cartItems.length > 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      right: -3,
                      bottom: 22,
                      height: 14,
                      width: 14,
                      backgroundColor: focused ? '#E96E6E' : '#C0C0C0',
                      borderRadius: 7,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 10 }}>
                    {cartItems.length}
                    </Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={focused ? require('./src/assets/focused/account.png') : require('./src/assets/normal/account.png')}
              style={{ height: size, width: size, resizeMode: 'center' }}
            />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

// Main App containing Welcome Screen and Main App with Tabs
const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Show WelcomeScreen only at the start */}
          <Stack.Screen name="Welcome" component={WelcomeScreen} />

          {/* Add new login and signup screens */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />

          {/* After WelcomeScreen, display the MainTabNavigator */}
          <Stack.Screen name="MainApp" component={MainTabNavigator} />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;

