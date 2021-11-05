import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Data from '../pages/Data';
import TabsNavigation from './Tabs';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return ( 
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="Data"
        component={Data}
      />
      <Stack.Screen
        name="Tabs"
        component={TabsNavigation}
      />
    </Stack.Navigator>
  );
}
export default StackNavigation;