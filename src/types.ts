// src/navigation/types.ts

// Define your navigation types here

// Example: Stack Navigator Param List
export type RootStackParamList = {
    Home: undefined;
    ProductDetails: { id: number };
    Cart: undefined;
  };
    
    // Example: Bottom Tab Navigator Param List
    export type BottomTabParamList = {
      Home: undefined;
      Cart: undefined;
    };
    
    // Example: Navigation Props
    import { StackNavigationProp } from '@react-navigation/stack';
    import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
    
    // Define navigation props for the HomeScreen
    export type HomeScreenNavigationProp = StackNavigationProp<
      RootStackParamList,
      'Home'
    >;
    
    // Define navigation props for the CartScreen
    export type CartScreenNavigationProp = BottomTabNavigationProp<
      BottomTabParamList,
      'Cart'
    >;