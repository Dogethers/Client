import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import UsersScreen from './UserScreen'


const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Users" component={UsersScreen} />
      </Tab.Navigator>
   
  );
}

