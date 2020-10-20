import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import FreindListScreen from './FreindListScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
  return (
    
      <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{
        activeTintColor: '#EE6F57',
      }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} 
        />
        
        <Tab.Screen 
          name="FreindListScreen" 
          component={FreindListScreen} 
          options={{
          tabBarLabel: 'Freind',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
   
  );
}

