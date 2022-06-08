import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Pages/Home";
import Detail from "./Pages/Detail";

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                componet={Home}
                options={{headerShown: false}}
                /> 
                <Stack.Screen
                name="Detail"
                componet={Detail}
                />          
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;