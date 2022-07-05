import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function Drawer {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Home" component={HomeScreen} />
            {/*<Drawer.Screen name="Article" component={Article} />*/}
        </Drawer.Navigator>
    );
}
