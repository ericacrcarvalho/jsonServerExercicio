import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Settings from '../pages/Settings';

const Tabs = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home'
  },
  Favorites: {
    name: 'heart-circle-outline'
  },
  Settings: {
    name: 'settings-outline'
  }
}

const TabsNavigation = () => {
  return ( 
    <Tabs.Navigator 
      initialRouteName="Home" 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name]
          return <Ionicons name={name} color={color} size={size}/>
        },
        tabBarStyle: {
          backgroundColor: '#c4a77d'
        },
        tabBarActiveTintColor: '#454372',
        tabBarInactiveTintColor: '#70877f',
        headerShown: false
      })
      }
    >
      <Tabs.Screen
        name="Home"
        component={Home}
      />
      <Tabs.Screen
        name="Favorites"
        component={Favorites}
      />
       <Tabs.Screen
        name="Settings"
        component={Settings}
      />
    </Tabs.Navigator>
  );
}
export default TabsNavigation;