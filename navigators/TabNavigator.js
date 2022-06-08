import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
    return (
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
    )
}

export default TabNavigator