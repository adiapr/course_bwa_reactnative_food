import React from "react"
import { Signin, SplashScreen, SignUp, SignUpAddress } from "../pages";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SplashScreen" 
                component={SplashScreen} 
                options={{ headerShown: false }}/>
            <Stack.Screen 
                name="SignIn" 
                component={Signin} 
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpAddress"
                component={SignUpAddress}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default Router;      