import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'http://192.168.1.11:4000',
	cache: new InMemoryCache(),
});
