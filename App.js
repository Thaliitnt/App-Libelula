import React from 'react';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'

//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



//Importando as telas --------------------------------
import FavoritosScreen from './screens/FavoritosScreen';
//import HomeScreen from './screens/HomeScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';
import PerfilScreen from './screens/PerfilScreen';
import TabNavigator from './navigators/TabNavigator';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#FFB5A7',
    accent: '#FFFFFF',
    background: '#FFFFFF'


  },
};

const Tab = createMaterialBottomTabNavigator();


function App() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>

        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={TabNavigator} options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <FontAwesome name="home" size={24} color={color} />

              )
            }
          }}
          />

          <Tab.Screen name="Favoritos" component={FavoritosScreen} options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <FontAwesome name="heart" size={24} color={color} />);
            }
          }} />

          <Tab.Screen name="Carrinho" component={CarrinhoScreen} options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <MaterialIcons name="shopping-cart" size={24} color={color} />);
            }
          }} />

          <Tab.Screen name="Perfil" component={PerfilScreen} options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <FontAwesome name="user-circle" size={24} color={color} />);
            }
          }} />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider >
  );
}

export default App;
