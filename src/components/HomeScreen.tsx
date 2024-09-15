import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface HomeScreenProps {
  navigation: DrawerNavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleLogoutPress = () => {
    navigation.navigate('PinInput');
  };

  function handleSearch(searchText: string): void {
    throw new Error('Function not implemented.');
  }

  function handleCreatePress(): void {
    throw new Error('Function not implemented.');
  }

  function handleSellPress(): void {
    throw new Error('Function not implemented.');
  }

  function handleSalePress(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <Button title="Search" onPress={() => handleSearch(searchText)} />
      </View>
      <View style={styles.buttonContainer}>
              <Button title="SELL" onPress={() => handleSellPress()} />
              <Button title="Create" onPress={() => handleCreatePress()} />
              <Button title="Choose" onPress={() => handleSellPress()} />
     </View>

      {/* Move Sale Button to the Right */}
      <View style={styles.buttonContainer}>
        <Image
          source={{ uri: 'data:image/jpeg;base64,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' }}
          style={styles.image}
        />
        <Button title="Sale" onPress={() => handleSalePress()} style={styles.saleButton} />
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FACBA2',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    backgroundColor: '#ffebd9',
    borderRadius: 5,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 50,
    marginLeft: 10, // Move the image to the left
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  //saleButton: {
    //marginTop: 10,
  //},
});

export default HomeScreen;
