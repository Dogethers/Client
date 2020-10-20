import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import HomeTabNavigator from "./HomeTabNavigator"
import GameRoom from './GameRoom'
import WaitingRoom from './WaitingRoom'
import MusicGameRules from './MusicGameRules';
import MusicGame from './MusicGame';
import MusicGameFinish from './MusicGameFinish';
import ChatRoom from './ChatRoom'


const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (

  
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Welcome" component={Welcome} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Register" component={Register} />
      <RootStack.Screen name="HomeTabNavigator" component={HomeTabNavigator} />
      <RootStack.Screen name="GameRoom" component={GameRoom} />
      <RootStack.Screen name="WaitingRoom" component={WaitingRoom} />
		<RootStack.Screen name="MusicGameRules" component={MusicGameRules} />
		<RootStack.Screen name="MusicGame" component={MusicGame} />
		<RootStack.Screen name="MusicGameFinish" component={MusicGameFinish} />
    <RootStack.Screen name="ChatRoom" component={ChatRoom} />
	</RootStack.Navigator>

);

export default RootStackScreen;
