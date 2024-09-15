import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Sample from '../components/Sample';
import ROUTES from '../constants/routes';
import HomeScreen from '../components/HomeScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
        <Stack.Navigator initialRouteName={ROUTES.SAMPLE}>
            <Stack.Screen name={ROUTES.SAMPLE} component={Sample} />
            <Stack.Screen name={ROUTES.HOMESCREEN} component={HomeScreen} />
        </Stack.Navigator>
  );
}

export default AuthNavigator;