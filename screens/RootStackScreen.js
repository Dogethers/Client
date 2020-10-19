import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import MusicGameRules from './MusicGameRules';
import MusicGame from './MusicGame';
import MusicGameFinish from './MusicGameFinish';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
	<RootStack.Navigator headerMode="none">
		<RootStack.Screen name="Welcome" component={Welcome} />
		<RootStack.Screen name="Login" component={Login} />
		<RootStack.Screen name="Register" component={Register} />
		<RootStack.Screen name="MusicGameRules" component={MusicGameRules} />
		<RootStack.Screen name="MusicGame" component={MusicGame} />
		<RootStack.Screen name="MusicGameFinish" component={MusicGameFinish} />
	</RootStack.Navigator>
);

export default RootStackScreen;
