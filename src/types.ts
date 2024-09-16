// src/navigation/types.ts

// Define your navigation types here
export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description?: string; // Optional field
    color?: string; // Optional field
    size?: string; // Optional field
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
// Example: Stack Navigator Param List
export type RootStackParamList = {
    Welcome: undefined; // Add this line to define the Welcome route
    HOME: undefined;
    Login: undefined; // Add this line
    SignUp: undefined;
    PRODUCT_DETAILS: { item: any }; // Adjust this type according to your parameters
    MainTabs: undefined;
    Cart: undefined;
    Profile: undefined;
  };
    
    // Example: Bottom Tab Navigator Param List
    export type BottomTabParamList = {
      Home: undefined;
      Cart: undefined;
      Profile: undefined;
    };
    
    // Example: Navigation Props
    import { StackNavigationProp } from '@react-navigation/stack';
    import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
    
    // Define navigation props for the HomeScreen
    export type HomeScreenNavigationProp = StackNavigationProp<
      RootStackParamList,
      'Welcome'
    >;
    
    // Define navigation props for the CartScreen
    export type CartScreenNavigationProp = BottomTabNavigationProp<
      BottomTabParamList,
      'Cart'
    >;