import React from 'react';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'

import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from '../App-Libélula/navigators/TabNavigator';



const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#FFB5A7',
    background: '#FFFFFF'


  },
};


const Drawer = createDrawerNavigator();

function App() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>

        <Drawer.Navigator initialRouteName="Home">

          <Drawer.Screen name="Home" component={TabNavigator} />
          {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} / > */}
        </Drawer.Navigator>

      </NavigationContainer>
    </PaperProvider >
  );
}




export default App;
