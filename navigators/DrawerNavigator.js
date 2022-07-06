import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNavigator from '../navigators/StackNavigator';
import TabNavigator from '../navigators/TabNavigator';
import telaLogin from '../screens/telaLogin';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (

        <Drawer.Navigator initialRouteName="Home">

            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Login" component={telaLogin} />

        </Drawer.Navigator>
    );
};

export default DrawerNavigator;