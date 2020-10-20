import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';
import {client} from './graphql/client'
import { ApolloProvider} from '@apollo/client'

export default function App() {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<RootStackScreen />
			</NavigationContainer>
		</ApolloProvider>
	);
}
