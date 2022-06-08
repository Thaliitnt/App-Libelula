import React from 'react';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'

//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import DetailsScreen from './screens/DetailsScreen'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#FFB5A7',
    accent: '#FFFFFF',


  },
};

const Tab = createMaterialBottomTabNavigator();
//const Tab = createBottomTabNavigator();

function App() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>

        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <FontAwesome name="home" size={24} color={color} />
              );
            }
          }} />
          <Tab.Screen name="Details" component={DetailsScreen} options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <FontAwesome name="info" size={24} color={color} />
              );
            }
          }} />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <FontAwesome name="gear" size={24} color={color} />
              );
            }
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider >
  );
}

export default App;
