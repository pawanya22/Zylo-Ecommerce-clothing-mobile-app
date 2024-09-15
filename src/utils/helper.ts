import AsyncStorage from "@react-native-async-storage/async-storage";

interface CartItem {
  id: string;
  [key: string]: any; // Adjust based on your CartItem properties
}

export const addToCart = async (item: CartItem): Promise<void> => {
  let cartItems: CartItem[] = await AsyncStorage.getItem("cart").then(
    (data) => (data ? JSON.parse(data) : [])
  );

  // Check if item already exists in the cart
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItemIndex === -1) {
    cartItems.push(item);
    await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
  }
};

export const deleteItem = async (id: string): Promise<void> => {
  let cartItems: CartItem[] | null = await AsyncStorage.getItem("cart").then(
    (data) => (data ? JSON.parse(data) : null)
  );

  if (cartItems) {
    cartItems = cartItems.filter((item) => item.id !== id);
    await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
  }
};