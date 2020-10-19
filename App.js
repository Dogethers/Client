import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';

export default function App() {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<RootStackScreen />
			</NavigationContainer>
		</ApolloProvider>
	);
}
