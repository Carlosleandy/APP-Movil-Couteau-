// import { StatusBar } from 'expo-status-bar'; // 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GenderScreen from './screens/GenderScreen';
import AgeScreen from './screens/AgeScreen';
import UniversitiesScreen from './screens/UniversitiesScreen';
import PokemonScreen from './screens/PokemonScreen';
import NewsScreen from './screens/NewsScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gender" component={GenderScreen} />
        <Stack.Screen name="Age" component={AgeScreen} />
        <Stack.Screen name="Universities" component={UniversitiesScreen} />
        <Stack.Screen name="Pokemon" component={PokemonScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}