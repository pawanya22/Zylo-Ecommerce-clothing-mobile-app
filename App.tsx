import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
import CartScreen from './src/screen/CartScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';
import ReorderScreen from './src/screen/ReorderScreen';
import AccountScreen from './src/screen/AccountScreen';
import { CartContext, CartProvider } from './src/context/CartProvider';

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
        component={MyHomeStack} // Home Stack contains Home & Product Details Screen
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
        name="REORDER"
        component={ReorderScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={focused ? require('./src/assets/focused/reorder.png') : require('./src/assets/normal/reorder.png')}
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
        name="ACCOUNT"
        component={AccountScreen}
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

          {/* After WelcomeScreen, display the MainTabNavigator */}
          <Stack.Screen name="MainApp" component={MainTabNavigator} />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;
